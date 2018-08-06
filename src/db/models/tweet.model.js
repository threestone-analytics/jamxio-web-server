import mongoose from 'mongoose';

const { Schema } = mongoose;
delete mongoose.connection.models['Tweet'];
const tweetsSchema = new Schema(
  {
    url: String,
    content: JSON,
    image: String,
    title: String,
    author: String,
    position: JSON,
  },
  { collection: 'tweets' }
);

export default mongoose.model('Tweet', tweetsSchema);
