export * from './prefix-manager/types';
export { default as PrefixManager } from './prefix-manager';
export { default as parser } from './parser';

export interface Attachment {
  url: string;
  name: string;
  size: number;
}

export interface StandardizedMessage {
  content: string;
  parts: string[];
  direct: boolean;
  created_at: number;
  attachments: Attachment[];
  author_id: string;
  channel_id: string;
  platform: string;
}

export interface Message {
  receiver: string;
  content: string;
  attachments: Attachment[];
  direct: boolean;
}
