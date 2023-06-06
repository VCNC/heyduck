import type { Message as Slack_Message } from '@slack/web-api/dist/response/ConversationsHistoryResponse';

export interface SlackItem {
  type: string;
  channel?: string;
  ts?: string;
}

export interface SlackEvent {
  type: string;
  user: string;
  text?: string;
  reaction?: string;
  item_user?: string;
  client_msg_id?: string;
  suppress_notification?: boolean;
  team?: string;
  channel?: string;
  event_ts?: string;
  ts?: string;
  subtype?: string;
  item?: SlackItem;
}

export interface Emojis {
  type: string;
  emoji: string;
}

export interface Updates {
  username: string;
  type: string;
}

export type Message = Slack_Message;
