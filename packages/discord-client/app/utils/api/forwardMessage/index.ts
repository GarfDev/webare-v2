import fetch, { FetchError } from 'node-fetch';
import { StandardizedMessage } from './types';
import { RequestError } from '../constants';
import { Response } from '../types';

async function forwardMessage(message: StandardizedMessage): Promise<Response> {
  if (!process.env.FULL_NODE_URL) {
    return {
      success: false,
      error: RequestError.CLIENT_ERROR,
      data: {},
    };
  }

  try {
    const response = await fetch(process.env.FULL_NODE_URL + '/messages', {
      method: 'post',
      body: JSON.stringify(message),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    if (error instanceof FetchError) {
      return {
        success: false,
        error: RequestError.CONNECTION_ERROR,
        data: {},
      };
    }
    return {
      success: false,
      error: RequestError.SERVER_ERROR,
      data: {},
    };
  }
}

export default forwardMessage;
