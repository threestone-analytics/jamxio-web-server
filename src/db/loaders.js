import DataLoader from 'dataloader';
import { dataLoaderMongoose } from 'dataloader-mongoose';

import models from './models';

const { Post, Record, Document, DocumentType, Publisher, Tweet } = models;

export default () => ({
  getPost: new DataLoader(ids => dataLoaderMongoose(Post, ids)),
  getTweet: new DataLoader(ids => dataLoaderMongoose(Tweet, ids)),
  getRecord: new DataLoader(ids => dataLoaderMongoose(Record, ids)),
  getDocument: new DataLoader(ids => dataLoaderMongoose(Document, ids)),
  getPublisher: new DataLoader(ids => dataLoaderMongoose(Publisher, ids)),
  getDocumentType: new DataLoader(ids => dataLoaderMongoose(DocumentType, ids)),
});
