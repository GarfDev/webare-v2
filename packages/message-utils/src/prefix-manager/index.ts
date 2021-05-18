import { getter, initer, setter, subscribe } from './store';

const PrefixManager = {
  init: initer,
  get: getter,
  set: setter,
  subscribe: subscribe,
};

export default PrefixManager;
