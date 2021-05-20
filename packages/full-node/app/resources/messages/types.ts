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
  platform: string;
}
