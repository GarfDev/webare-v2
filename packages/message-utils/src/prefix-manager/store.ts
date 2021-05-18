import { PrefixStore } from './types';

let prefixManagerStore: PrefixStore = {};

const getter = (): PrefixStore => prefixManagerStore;

const setter = (state: PrefixStore): PrefixStore => {
  prefixManagerStore = state;
  return prefixManagerStore;
};

export { getter, setter };
