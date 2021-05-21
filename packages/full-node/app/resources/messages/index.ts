import { Request, Response } from 'express';
import { StandardizedMessage, Message } from '@webare/message-utils';
import { standardizedMessageSchema } from './constants';
import Queuer from 'utils/Queuer';
import Command from 'utils/Command';

const messages = async (req: Request, res: Response) => {
  const valid = await standardizedMessageSchema.isValid(req.body);
  const payload: StandardizedMessage = req.body;
  if (!valid) return res.status(404).send({});
  const queuer = Queuer.get();

  if (payload.parts.length) {
    const flattenedPart = payload.parts.join('/');
    const command = Command.get(flattenedPart);
    if (!command) return res.status(404).send({});
    const response: Message = {
      direct: payload.direct,
      receiver: payload.direct ? payload.author_id : payload.channel_id,
      content: (await command.handler(payload)) || '',
      attachments: payload.attachments,
    };
    queuer.add(payload.platform, response);
    return res.send({ status: 'success' });
  }

  const response: Message = {
    direct: payload.direct,
    receiver: payload.direct ? payload.author_id : payload.channel_id,
    content: payload.content,
    attachments: payload.attachments,
  };

  queuer.add(payload.platform, response);
  res.send({ status: 'success' });
};

export default messages;
