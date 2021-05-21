// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getModule = (file: string): any => {
  return require(file);
};

export default getModule;
