import * as log from 'bog';
import Wbc from '../slack/Wbc';

const usernameRegex = /(<@[A-Z0-9]{2,}>)/g;
const usergroupRegex = /<!subteam\^([A-Z0-9]{2,})\|@[A-Z0-9]{2,}>/g;

/**
 * @param { string } text from slack message
 * @returns array<string>, only unique values
 */
async function getUserNames(text: string): Promise<string[]> {
  const rawUsers: string[] = parseUsernames(text);
  const groupUsers: string[] = await parseGroupUsers(text);

  const users = rawUsers.concat(groupUsers).filter((v, i, a) => a.indexOf(v) === i)

  return users
}

/**
 * @param { string } text from slack message
 * @returns array<string>, only unique values
 */
function parseUsernames(text: string): string[] {
  // Regex to get all users from message
  const usersRaw = text.match(new RegExp(usernameRegex));
  if (!usersRaw) return [];
  // replace unwanted chars
  const users = usersRaw.map((x) => x.replace('<@', '').replace('>', ''));
  // Remove duplicated values
  const unique: string[] = users.filter((v, i, a) => a.indexOf(v) === i);
  return unique.length ? unique : [];
}

/**
 * @param { string } text from slack message
 * @returns array<string>, only unique values
 */
async function parseGroupUsers(text: string): Promise<string[]> {
  const regexp = new RegExp(usergroupRegex)
  let match;
  const groupsRaw = []
  // Regex to get all groups from message
  while ((match = regexp.exec(text)) !== null) {
    log.info(match)
    groupsRaw.push(match[1])
  }
  log.info('groupsRaw: ')
  log.info(groupsRaw)
  // replace unwanted chars
  const users = (await Promise.all(groupsRaw.map(async (x) => await Wbc.fetchUsersOfGroup(x)))).flat();
  // Remove duplicated values
  const unique: string[] = users.filter((v, i, a) => a.indexOf(v) === i);
  return unique.length ? unique : [];
}

/**
 * @param { Obejct } msg slackmessage
 * @param { array<object> } emojis emojis that we want to use. Comes from env
 * @return { object } { giver: string, updates:array<object> }
 *  - giver: sent from , ex => giver: USER1
 *  - updates: array<object> containing, username, and type. ex:
 *  - [ { username: 'USER2', type: 'inc' },
 *    { username: 'USER2', type: 'dec' } ]
 */
async function parseMessage(msg, emojis) {
  // Array containg data of whom to give / remove points from
  const updates = [];

  // Array with "allowed" emojis mentioned in slackmessage
  const emojiHits = [];

  const users = await getUserNames(msg.text)
  if (!users.length) return false;

  // Match and push allowed emojis to emojiHits
  emojis.map((x: any) => {
    const hitsRaw = msg.text.match(new RegExp(x.emoji, 'g'));
    if (hitsRaw) hitsRaw.forEach((e: any) => emojiHits.push(e));
    return undefined;
  });

  // Rebuild emoji object with emojiHits
  const hits = emojiHits.map((x: any) => ({
    emoji: x,
    type: emojis.filter((t: any) => t.emoji === x)[0].type,
  }));

  if (hits.length === 0) return false;

  // For each emojiHits give each user a update
  hits.map((x) => users.forEach((u) => updates.push({ username: u, type: x.type })));

  return {
    updates,
    giver: msg.user,
  };
}

/**
 * @param { Obejct } reaction slack reaction
 * @param { Obejct } reactedMsg slackmessage that has been reacted
 * @param { array<object> } emojis emojis that we want to use. Comes from env
 * @return { object } { giver: string, updates:array<object> }
 *  - giver: sent from , ex => giver: USER1
 *  - updates: array<object> containing, username, and type. ex:
 *  - [ { username: 'USER2', type: 'inc' },
 *    { username: 'USER2', type: 'dec' } ]
 */
async function parseReactedMessage(reaction, reactedMsg, emojis) {
  // Array containg data of whom to give / remove points from
  const updates = [];

  const users = await getUserNames(reactedMsg.text)

  const sender = reactedMsg.user ?? reaction.item_user;
  // If no one is mentioned on the original slack message, the sender receives ducks
  if (!users.length && sender) {
    users.push(sender);
  }

  // Filter self reaction
  const filteredUsers = users.filter((u) => u !== reaction.user);

  log.info('reactedMsg: ' + reactedMsg.text);
  log.info('users: ' + users.join(','));
  log.info('sender: ' + sender);
  log.info('final users: ' + filteredUsers.join(','));

  const type = emojis.filter((e: any) => e.emoji == `:${reaction.reaction}:`)[0].type;

  // Give each user a update
  filteredUsers.forEach((u) => updates.push({ username: u, type: type }));

  return {
    updates,
  };
}

export { parseMessage, parseReactedMessage, parseUsernames };
