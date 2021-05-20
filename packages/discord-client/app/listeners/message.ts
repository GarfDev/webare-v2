import { Message } from 'discord.js';
import { PrefixManager, parser } from '@webare/message-utils';
import forwardMessage from 'utils/api/forwardMessage';

const onMessage = async (message: Message) => {
  const prefix = PrefixManager.get(message.guild?.id);
  const isCommand = message.content.startsWith(prefix);
  const isFromDM = !message.guild;

  if (!isCommand && !isFromDM) return;
  const parts = parser({ prefix, content: message.content });
  const attachments = message.attachments.map(attachment => ({
    name: attachment.name || '',
    size: attachment.size,
    url: attachment.url,
  }));

  forwardMessage({
    direct: isFromDM,
    attachments: attachments,
    created_at: message.createdTimestamp,
    author_id: message.author.id,
    content: message.content,
    parts: parts,
  });
};

export default onMessage;
