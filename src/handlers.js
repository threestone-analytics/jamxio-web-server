import { ApolloServer } from 'apollo-server-lambda';
import { makeExecutableSchema } from 'graphql-tools';
import 'babel-polyfill';
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
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
    models, 
    loaders: loaders() 
  }),
});

let graphql = server.createHandler({
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: ['X-Apollo-Tracing', 'Content-Type', 'Authorization'],
  },
});

let graphiql = server.createHandler({
  playground: true,
  endpointURL: 'graphql',
  cors: {
    origin: '*',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
});

export { graphql, graphiql };
