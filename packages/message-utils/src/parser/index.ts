export interface ParserProps {
  content: string;
  prefix: string;
}

const parser = ({ content, prefix }: ParserProps) => {
  const parsedContent = content.toLowerCase().replace(prefix, '').trim();
  if (!parsedContent) return [];
  return parsedContent.split(' ');
};

export default parser;
