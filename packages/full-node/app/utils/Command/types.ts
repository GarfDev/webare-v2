import { StandardizedMessage } from '@webare/message-utils';

export interface Command {
  name: string;
  cooldown: number;
  helpMessage: string;
  usageMessage: string;
  handler: (message: StandardizedMessage) => Promise<string>;
  childs: { [key: string]: Command };
}
