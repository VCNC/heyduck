import config from './config';
import BurritoStore from './store/BurritoStore';
import LocalStore from './store/LocalStore';
import { parseMessage, parseReactedMessage } from './lib/parseMessage';
import { validBotMention, validMessage, validReaction } from './lib/validator';
import Rtm from './slack/Rtm';
import Wbc from './slack/Wbc';
import log from 'bog';

const { enableDecrement, dailyCap, dailyDecCap, emojiInc, emojiDec, disableEmojiDec } = config.slack;

interface Emojis {
  type: string;
  emoji: string;
}

interface Updates {
  username: string;
  type: string;
}
const emojis: Array<Emojis> = [];
const dashBoardUrl = 'http://ec2-43-201-180-152.ap-northeast-2.compute.amazonaws.com:3333/';

const incEmojis = emojiInc.split(',').map((emoji) => emoji.trim());
incEmojis.forEach((emoji: string) => emojis.push({ type: 'inc', emoji }));

if (!disableEmojiDec) {
  const decEmojis = emojiDec.split(',').map((emoji) => emoji.trim());
  decEmojis.forEach((emoji: string) => emojis.push({ type: 'dec', emoji }));
}

const giveBurritos = async (giver: string, updates: Updates[]) => {
  return updates.reduce(async (prev: any, burrito) => {
    return prev.then(async () => {
      if (burrito.type === 'inc') {
        await BurritoStore.giveBurrito(burrito.username, giver);
      } else if (burrito.type === 'dec') {
        await BurritoStore.takeAwayBurrito(burrito.username, giver);
      }
    });
  }, Promise.resolve());
};

const notifyUser = (user: string, message: string, messageBlock?: Object[]) => {
  if (messageBlock != null) {
    Wbc.sendDMBlock(user, message, messageBlock);
  } else {
    Wbc.sendDM(user, message);
  }
};

const handleBurritos = async (giver: string, channel: string, duckedMessage: string, duckedMessageLink: string, updates: Updates[]) => {
  const giverIdx = updates.findIndex( (update) => update.username === giver );

  log.info(JSON.stringify(updates));
  log.info(giverIdx);

  if (giverIdx > -1) {
    updates.splice(giverIdx, 1);
  }

  log.info(updates);

  if (updates.length === 0) {
    notifyUser(giver, `나 자신에게 :duck:을 줄 수 없습니다. 메세지를 전송한 사람에게 주고싶다면 새로 태그하고 주는 것은 어떨까요? <${duckedMessageLink}|내가 덕 주려고 했던 메세지>`);
    return false;
  }

  const isChannelPrivate = await Wbc.isChannelPrivate(channel);
  if (isChannelPrivate) {
    notifyUser(giver, '공개 채널에서만 :duck:을 줄 수 있습니다.');
    return false;
  }

  if (!enableDecrement) {
    const burritos = await BurritoStore.givenBurritosToday(giver, 'from');
    const diff = dailyCap - burritos;
    if (updates.length > diff) {
      notifyUser(giver, `${updates.length} 개의 :duck:을 주는데 실패했습니다. 오늘 줄 수 :duck:의 개수는 ${diff}개 입니다.`);
      return false;
    }
    if (burritos >= dailyCap) {
      return false;
    }
    await giveBurritos(giver, updates);
  } else {
    const givenBurritos = await BurritoStore.givenToday(giver, 'from', 'inc');
    const givenRottenBurritos = await BurritoStore.givenToday(giver, 'from', 'dec');
    const incUpdates = updates.filter((x) => x.type === 'inc');
    const decUpdates = updates.filter((x) => x.type === 'dec');
    const diffInc = dailyCap - givenBurritos;
    const diffDec = dailyDecCap - givenRottenBurritos;
    if (incUpdates.length) {
      if (incUpdates.length > diffInc) {
        notifyUser(giver, `${updates.length} 개의 :duck:을 주는데 실패했습니다. 오늘 줄 수 :duck:의 개수는 ${diffInc}개 입니다.`);
      } else {
        await giveBurritos(giver, incUpdates);
      }
    }
    if (decUpdates.length) {
      if (decUpdates.length > diffDec) {
        notifyUser(
          giver,
          `You are trying to give away ${updates.length} rottenburritos, but you only have ${diffDec} rottenburritos left today!`,
        );
      } else {
        await giveBurritos(giver, decUpdates);
      }
    }
  }

  const givenDucks = await BurritoStore.givenBurritosToday(giver, 'from');
  const leftOverDucks = dailyCap - givenDucks;
  const receivers = [...new Set(updates.map((it) => it.username))];
  const eachGivenDucks = Math.ceil(updates.length / receivers.length);
  const firstLineContent = duckedMessage.split('\n')[0] ?? '';
  const trailingDots = duckedMessage.split('\n').length > 1 ? '...' : '';
  notifyUser(
    giver,
    `${receivers
      .map((it) => `<@${it}>`)
      .join(' ')}에게 ${eachGivenDucks}개의 :duck:을 주었습니다. 오늘 ${leftOverDucks}개의 :duck:을 더 줄 수 있습니다.`,
  );
  receivers.forEach((receiver) => {
    notifyUser(receiver, `<@${giver}>님이 <#${channel}>에서 1개의 :duck:을 주었습니다.`, [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `<@${giver}>님이 <#${channel}>에서 ${eachGivenDucks}개의 :duck:을 주었습니다.`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `<${duckedMessageLink}|내가 덕 받은 메세지 링크>`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `> ${firstLineContent}${trailingDots}`,
        },
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `<${dashBoardUrl}|헤이덕 대시보드>에서 내가 받은 :duck: 수를 확인해보세요!`,
        },
      },
    ]);
  });
  return true;
};

const start = () => {
  Rtm.on('slackMessage', async (event: any) => {
    if (validMessage(event, emojis, LocalStore.getAllBots())) {
      if (validBotMention(event, LocalStore.botUserID())) {
        // Geather data and send back to user
      } else {
        const result = parseMessage(event, emojis);
        if (result) {
          const { giver, updates } = result;
          if (updates.length) {
            const messageLink = await Wbc.fetchMessageLink(event.channel, event.event_ts);
            await handleBurritos(giver, event.channel, event.text, messageLink, updates);
          }
        }
      }
    }
  });

  Rtm.on('slackReaction', async (event: any) => {
    if (validReaction(event, emojis)) {
      const channelId = event.item.channel;
      const originalContent = await Wbc.fetchReactedMessage(channelId, event.item.ts);
      const messageLink = await Wbc.fetchMessageLink(channelId, event.item.ts);
      const { updates } = parseReactedMessage(event, originalContent, emojis);
      if (updates.length) {
        await handleBurritos(event.user, channelId, originalContent.text, messageLink, updates);
      }
    }
  });
};

export { handleBurritos, notifyUser, start };
