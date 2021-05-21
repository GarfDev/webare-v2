import { Command } from 'utils/Command/types';
// import { StandardizedMessage } from '@webare/message-utils';

const listener: Command['handler'] = async () => {
  return '`pong`';
};

const ping: Command = {
  name: 'ping',
  cooldown: 5,
  handler: listener,
  helpMessage: 'Return a pong message',
  usageMessage: 'Return a pong message',
};

export default ping;
