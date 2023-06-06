import config from '../config';
import { WebClient } from '@slack/web-api';
import { Message } from '@slack/web-api/dist/response/ConversationsHistoryResponse';

interface WbcParsed {
  id: string;
  name: string;
  avatar: string;
  memberType: string;
}

class Wbc {
  wbc: WebClient | undefined;

  register(wbc: WebClient) {
    this.wbc = wbc;
  }

  async fetchSlackUsers() {
    const users: WbcParsed[] = [];
    const bots: WbcParsed[] = [];

    console.info('Fetching slack users via wbc');
    const result = await this.wbc!.users.list();
    (result.members ?? []).forEach((x: any) => {
      // reassign correct array to arr
      const arr = x.is_bot ? bots : users;
      arr.push({
        id: x.id,
        name: x.is_bot ? x.name : x.real_name,
        memberType: x.is_restricted ? 'guest' : 'member',
        avatar: x.profile.image_48,
      });
    });
    return { users, bots };
  }

  async sendDM(username: string, text: string) {
    const openConversation = await this.wbc!.conversations.open({
      users: username,
    });

    if (!openConversation.ok) {
      console.warn(`Failed to open conversation with username: "${username}"`);
      return;
    }
    if (openConversation.channel?.id === undefined) {
      console.warn(`Failed to open conversation cause channel id is empty."`);
      return;
    }

    const res = await this.wbc!.chat.postMessage({
      text,
      channel: openConversation.channel.id,
      username: config.slack.bot_name,
      icon_emoji: ':duck:',
    });

    if (res.ok) {
      console.info(`Notified user ${username}`);
    }
  }

  async fetchReactedMessage(
    channelId: string,
    timestamp: string,
  ): Promise<Message | undefined> {
    console.info('Fetching reacted message via wbc');
    const res = await this.wbc!.conversations.history({
      channel: channelId,
      latest: timestamp,
      inclusive: true,
      limit: 1,
    });

    return (res.messages ?? [])[0];
  }
}

export default new Wbc();
