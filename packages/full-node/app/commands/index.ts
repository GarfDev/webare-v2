import Command from 'utils/Command';
// Import resources
import Ping from './ping';

const loadCommands = () => {
  Command.register('ping', Ping);
};

export default loadCommands;
