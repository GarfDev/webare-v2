import { StandardizedMessage } from '@webare/message-utils';

export interface Command {
  name: string;
  cooldown: number;
  handler: (
    message: StandardizedMessage,
  ) => Promise<string | void | undefined | null>;
  helpMessage: string;
  usageMessage: string;
}
