import dotenv from 'dotenv';
import { getClient } from 'utils/discord';

import onReady from 'listeners/ready';
import onMessage from 'listeners/message';

dotenv.config();

async function application(): Promise<void> {
  const client = getClient();

  client.on('ready', onReady);
  client.on('message', onMessage);

  client.login(process.env.TOKEN || '');
}

if (process.env.NODE_ENV === 'development') {
  application();
}

export default application;
