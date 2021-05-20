import { Message } from 'discord.js';
import { PrefixManager, parser } from '@webare/message-utils';
import forwardMessage from 'utils/api/forwardMessage';
import { RequestError } from 'utils/api/constants';
import { getClient } from 'utils/discord';

const onMessage = async (message: Message) => {
  const client = getClient();
  const prefix = PrefixManager.get(message.guild?.id);
  const isFromBot = message.author.bot;
  const isFromSelf = message.author.id === client.user?.id;
  const isCommand = message.content.startsWith(prefix);
  const isFromDM = !message.guild;
  if (isFromBot || isFromSelf) return;
  if (!isCommand && !isFromDM) return;
  const parts = isCommand ? parser({ prefix, content: message.content }) : [];
  const attachments = message.attachments.map(attachment => ({
    name: attachment.name || '',
    size: attachment.size,
    url: attachment.url,
  }));

  const result = await forwardMessage({
    direct: isFromDM,
    attachments: attachments,
    created_at: message.createdTimestamp,
    author_id: message.author.id,
    channel_id: message.channel.id,
    content: message.content,
    platform: 'discord',
    parts: parts,
  });

  if (result.error === RequestError.CONNECTION_ERROR) {
    const res = await message.channel.send(
      '`There an error on the connection to our server, please try again later.`',
    );
    setTimeout(() => {
      if (res.deletable) res.delete();
    }, 10000);
  }
};

export default onMessage;
