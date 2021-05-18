import { PrefixStore, Subscriber } from './types';

let prefixManagerStore: PrefixStore = {};
let subscriber: Subscriber = null;

const getter = (guildId?: string): string =>
  prefixManagerStore[guildId || ''] || process.env.DEFAULT_PREFIX || '';

const setter = (guildId: string, prefix: string) => {
  prefixManagerStore[guildId] = prefix.toLowerCase();
  if (subscriber) subscriber(prefixManagerStore);
};

const initer = (state: PrefixStore): PrefixStore => {
  prefixManagerStore = state;
  if (subscriber) subscriber(prefixManagerStore);
  return prefixManagerStore;
};

const subscribe = (newSubscriber: Subscriber) => {
  subscriber = newSubscriber;
  return subscriber;
};

export { getter, setter, subscribe, initer };
