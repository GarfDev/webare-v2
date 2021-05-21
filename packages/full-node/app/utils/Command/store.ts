import { Command } from './types';

const store: { [path: string]: Command } = {};

const getter = (path: string): Command | undefined => store[path];

const register = (path: string, command: Command) => {
  store[path] = command;
};

export { register, getter };
