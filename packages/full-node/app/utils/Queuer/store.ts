import _ from 'lodash';
import { Queue } from 'bullmq';

let queuer: Queue | null = null;

const init = () => {
  if (queuer) {
    throw new Error('Queuer already Initialized');
  }
  queuer = new Queue('messages', {
    connection: {
      host: process.env.REDIS_HOST,
      port: _.toNumber(process.env.REDIS_PORT || '6379'),
    },
  });
};

const getter = () => {
  if (queuer) return queuer;
  throw new Error('Queuer being use before it initialized');
};

const setter = (newQueuer: Queue) => {
  queuer = newQueuer;
};

export { init, getter, setter };
