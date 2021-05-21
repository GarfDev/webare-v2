import { Command } from './types';

const store: { [path: string]: Command } = {};

const getter = (
  parts: string[],
  params: string[] = [],
): [Command, string[]] | undefined => {
  if (!parts.length) return undefined;
  const command = store[parts.join('/')];
  if (command) return [command, params];
  const newParam = parts.pop();
  const nextParams = newParam ? [newParam, ...params] : params;
  return getter(parts, nextParams);
};

const register = (path: string, command: Command) => {
  store[path] = command;
};

export { register, getter };
