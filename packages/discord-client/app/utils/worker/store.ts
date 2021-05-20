import _ from 'lodash';
import { Worker } from 'bullmq';

let worker: Worker | null = null;

const init = (func: (job: unknown) => Promise<void>) => {
  if (worker) {
    throw new Error('Worker already Initialized');
  }
  worker = new Worker('messages', func, {
    connection: {
      host: process.env.REDIS_HOST,
      port: _.toNumber(process.env.REDIS_PORT || '6379'),
    },
  });
};

const getter = () => {
  if (worker) return worker;
  throw new Error('Worker being use before it initialized');
};

const setter = (newWorker: Worker) => {
  worker = newWorker;
};

export { init, getter, setter };
