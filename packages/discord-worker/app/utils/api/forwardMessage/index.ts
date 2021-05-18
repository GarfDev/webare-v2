import fetch from 'node-fetch';
import { StandardizedMessage } from './types';

async function forwardMessage(message: StandardizedMessage) {
  if (!process.env.FULL_NODE_URL) {
    throw new Error('Cannot find Full Node URL.');
  }
  const response = await fetch(process.env.FULL_NODE_URL + '/messages', {
    method: 'POST',
    body: JSON.stringify(message),
  });
  const data = await response.json();
  return data;
}

export default forwardMessage;
