import dotenv from 'dotenv';
import { JobJson } from 'bullmq';
import { getClient } from 'utils/discord';
import Worker from 'utils/worker';

import onReady from 'listeners/ready';
import onMessage from 'listeners/message';

dotenv.config();

async function application(): Promise<void> {
  const client = getClient();

  client.on('ready', onReady);
  client.on('message', onMessage);

  Worker.init(async arg => {
    const job = arg as JobJson;
    console.log(job.data);
  });

  client.login(process.env.TOKEN || '');
}

application();
export default application;
