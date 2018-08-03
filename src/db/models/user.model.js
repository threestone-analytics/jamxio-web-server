import mongoose from 'mongoose';

const { Schema } = mongoose;
delete mongoose.connection.models['User'];
const User = new Schema(
  {
    name: String,
    lastname: String,
    username: String,
  },
  { collection: 'user' }
);

export default mongoose.model('User', User);
