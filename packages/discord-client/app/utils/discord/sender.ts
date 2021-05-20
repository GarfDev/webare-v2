import { Client, MessageEmbed, TextChannel } from 'discord.js';
import { getClient } from 'utils/discord';

const createSendMessageToDM =
  (client: Client) => async (id: string, content: string | MessageEmbed) => {
    const channel = (await client.users.fetch(id)).dmChannel;
    if (!channel) return;

    const isTextChannel = channel.isText();
    if (!isTextChannel) return;

    channel.send(content);
  };

const createSendMessageToID =
  (client: Client) => async (id: string, content: string | MessageEmbed) => {
    const channel = await client.channels.fetch(id);
    if (!channel) return;

    const isTextChannel = channel.isText();
    if (!isTextChannel) return;

    (channel as TextChannel).send(content);
  };

export default {
  direct: createSendMessageToDM(getClient()),
  guild: createSendMessageToID(getClient()),
};
