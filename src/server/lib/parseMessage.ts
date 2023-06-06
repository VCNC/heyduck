import { Emojis, Updates } from '~/server/types/SlackRtm';
import { Message, SlackEvent } from '~/server/types/SlackRtm';

const usernameRegex = /(<@[A-Z0-9]{2,}>)/g;

/**
 * @param { string | undefined } text from slack message
 * @returns array<string>, only unique values
 */
function parseUsernames(text: string | undefined): string[] {
  // Regex to get all users from message
  if (text === undefined) return [];
  const usersRaw = text.match(new RegExp(usernameRegex));
  if (!usersRaw) return [];
  // replace unwanted chars
  const users = usersRaw.map((x) => x.replace('<@', '').replace('>', ''));
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
function parseMessage(
  msg: Message,
  emojis: Emojis[],
): { updates: Updates[]; giver: string } | undefined {
  // Array containg data of whom to give / remove points from
  const updates: Updates[] = [];

  // Get usernames from slack message
  const users: string[] = parseUsernames(msg.text);
  if (!users.length) return undefined;

  // Array with "allowed" emojis mentioned in slackmessage
  const emojiHits = emojis.flatMap((x: Emojis) => {
    const hitsRaw = msg.text?.match(new RegExp(x.emoji, 'g'));
    return hitsRaw ?? [];
  });

  // Rebuild emoji object with emojiHits
  const hits = emojiHits.map((x: any) => ({
    emoji: x,
    type: emojis.filter((t: any) => t.emoji === x)[0]!.type,
  }));

  if (hits.length === 0) return undefined;

  // For each emojiHits give each user a update
  hits.map((x) =>
    users.forEach((u) => updates.push({ username: u, type: x.type })),
  );

  if (msg.user === undefined) return undefined;

  return {
    updates,
    giver: msg.user,
  };
}

/**
 * @param { SlackEvent } reaction slack reaction
 * @param { Message } reactedMsg slackmessage that has been reacted
 * @param { array<Emojis> } emojis emojis that we want to use. Comes from env
 * @return { object } { giver: string, updates:array<object> }
 *  - giver: sent from , ex => giver: USER1
 *  - updates: array<object> containing, username, and type. ex:
 *  - [ { username: 'USER2', type: 'inc' },
 *    { username: 'USER2', type: 'dec' } ]
 */
function parseReactedMessage(
  reaction: SlackEvent,
  reactedMsg: Message,
  emojis: Emojis[],
): Updates[] {
  // Array containg data of whom to give / remove points from
  const updates: Updates[] = [];

  // Get usernames from reacted slack message
  const users: string[] = parseUsernames(reactedMsg.text);
  // If no one is mentioned on the original slack message, the sender receives duck
  if (!users.length) {
    if (reaction.item_user !== undefined) {
      users.push(reaction.item_user);
    }
  }

  const type = emojis.filter(
    (e: Emojis) => e.emoji == `:${reaction.reaction}:`,
  )[0]?.type;

  // Give each user a update
  users.forEach((u) => updates.push({ username: u, type: type! }));
  return updates;
}

export { parseMessage, parseReactedMessage, parseUsernames };
