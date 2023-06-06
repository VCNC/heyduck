import { WebClient } from '@slack/web-api';
import { RTMClient } from '@slack/rtm-api';
import config from '../config';

export default {
  rtm: new RTMClient(config.slack.api_token),
  wbc: new WebClient(config.slack.api_token),
};
