import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress, ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

import db from './config/db.config';
import loaders from './db/loaders';
import models from './db/models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  context: { models, loaders: loaders() },
});

const app = express();
app.use(cors());


server.applyMiddleware({ app });

db.connection.on('error', error => {
  console.log(error);
  throw new Error('Unable to connect to database');
});

db.connection.on('connected', () => {
  app.listen(4000, () => {
    console.log("GraphQL server started"); // eslint-disable-line
  });
});
