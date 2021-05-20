import dotenv from 'dotenv';
import { JobJson } from 'bullmq';
import { Message } from '@webare/message-utils';
import { getClient, Sender } from 'utils/discord';
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
    if (job.name !== 'discord') return;
    const data = job.data as unknown as Message;
    if (data.direct) {
      await Sender.direct(data.receiver, data.content);
    }
    await Sender.guild(data.receiver, data.content);
  });

  client.login(process.env.TOKEN || '');
}

application();
export default application;
