export interface PrefixStore {
  [guildId: string]: string;
}

export type Subscriber = ((store: PrefixStore) => void) | null;
