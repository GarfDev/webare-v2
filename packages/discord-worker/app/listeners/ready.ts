import log from 'npmlog';
import moment from 'moment';
import { getClient } from 'utils/discord';
import { LOG_TIME_FORMAT } from '@constants';

const onReady = () => {
  const client = getClient();
  const prefix = moment().format(LOG_TIME_FORMAT);
  const message = `Logged in as ${client.user?.username}#${client.user?.discriminator}`;
  log.info(prefix, message);
};

export default onReady;
