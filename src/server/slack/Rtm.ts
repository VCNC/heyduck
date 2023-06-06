import { EventEmitter } from 'events';
import { SlackEvent } from '../types/SlackRtm';
import { RTMClient } from '@slack/rtm-api';

class Rtm extends EventEmitter {
  rtm: RTMClient | undefined;

  register(rtm: RTMClient) {
    this.rtm = rtm;
    this.listener();
  }

  listener(): void {
    console.log('Listening on slack messages and reactions');
    this.rtm?.on('message', (event: SlackEvent) => {
      if (!!event.subtype && event.subtype === 'channel_join') {
        console.info('Joined channel', event.channel);
      }
      if (event.type === 'message') {
        this.emit('slackMessage', event);
      }
    });
    this.rtm?.on('reaction_added', (event: SlackEvent) => {
      if (event.type === 'reaction_added') {
        this.emit('slackReaction', event);
      }
    });
  }
}

export default new Rtm();
