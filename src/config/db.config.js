import mongoose from 'mongoose';

const uri =
  'mongodb://alexter42:contrasenaalexter42@jamxio-shard-00-00-kloz1.mongodb.net:27017,jamxio-shard-00-01-kloz1.mongodb.net:27017,jamxio-shard-00-02-kloz1.mongodb.net:27017/jamxio-web?ssl=true&replicaSet=jamxio-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(
  uri,
  { useNewUrlParser: true }
);

console.log(uri);

// print mongoose logs in dev env
if (process.env.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    console.info(`${collectionName}.${method}`, doc, 'debug'); // eslint-disable-line no-console
  });
}
mongoose.connection.on('disconnected', () => {
  console.info('Database connection disconnected!'); // eslint-disable-line no-console
});
mongoose.connection.on('connecting', () => {
  console.info('Database connection connecting!'); // eslint-disable-line no-console
});
mongoose.connection.on('connected', () => {
  console.info('Database connection successful!'); // eslint-disable-line no-console
});
mongoose.connection.on('disconnecting', () => {
  console.info('Database disconnecting!'); // eslint-disable-line no-console
});

export default mongoose;
