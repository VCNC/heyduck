/* eslint-disable import/no-duplicates */
import * as log from 'bog';
import { WebClient } from '@slack/web-api';
import { App } from '@slack/bolt';
import { EventMock, WebMock } from '../../test/lib/slackMock';
import config from '../config';
/* eslint-enable import/no-duplicates */

const { slackMock } = config.misc;

log.debug('Slack mockApi loaded', slackMock);

export default {
  event: slackMock
    ? new EventMock()
    : new App({
        token: config.slack.api_token,
        appToken: config.slack.app_token,
        socketMode: true,
      }),
  wbc: slackMock ? new WebMock() : new WebClient(config.slack.api_token),
};
