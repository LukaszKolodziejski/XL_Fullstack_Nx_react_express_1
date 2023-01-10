import { ObjectId } from 'mongodb';

export interface Resource {
  crawl: ObjectId;
  url: string;
  status: number;
  title?: string;
  description?: string;
  h1?: string[];
}
