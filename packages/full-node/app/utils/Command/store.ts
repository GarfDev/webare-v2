import getStaticPath from 'utils/getStaticPath';
import readDir from 'utils/readDir';
// import { Command } from './types';

// const commandStore: { [key: string]: Command } = {};

const init = () => {
  const loadPath = getStaticPath('commands');
  const paths = readDir(loadPath);
  console.log(paths);
};

export { init };
