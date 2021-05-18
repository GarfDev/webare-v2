export interface ParserProps {
  content: string;
  prefix: string;
}

const parser = ({ content, prefix }: ParserProps) => {
  return content.toLowerCase().replace(prefix, '').trim().split(' ');
};

export default parser;
