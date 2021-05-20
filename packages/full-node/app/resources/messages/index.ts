import { Request, Response } from 'express';
import { StandardizedMessage } from './types';
import { standardizedMessageSchema } from './constants';
import Queuer from 'utils/Queuer';

const messages = async (req: Request, res: Response) => {
  const valid = await standardizedMessageSchema.isValid(req.body);
  const payload: StandardizedMessage = req.body;
  if (!valid) return res.status(404).send({});
  const queuer = Queuer.get();
  queuer.add('messages', payload);
  console.log('Client sent', JSON.stringify(payload));
  res.send({ status: 'success' });
};

export default messages;
