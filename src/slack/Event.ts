import * as log from 'bog';
import { EventEmitter } from 'events';
import { App } from '@slack/bolt';

interface SlackItem {
  type: string;
  channel?: string;
  ts?: string;
}

interface SlackEvent {
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

class Event extends EventEmitter {
  client: any;

  register(client: any) {
    this.client = client;
    this.listener();
  }

  listener(): void {
    log.info('Listening on slack messages and reactions');
    this.client.event('message', ({ event }: { event: SlackEvent }) => {
      log.info(JSON.stringify(event));
      if (!!event.subtype && event.subtype === 'channel_join') {
        log.info('Joined channel', event.channel);
      }
      if (event.type === 'message') {
        this.emit('slackMessage', event);
      }
    });
    this.client.event('reaction_added', ({ event }: { event: SlackEvent }) => {
      log.info(JSON.stringify(event));
      if (event.type === 'reaction_added') {
        this.emit('slackReaction', event);
      }
    });
  }
}

export default new Event();
