import mongoose from 'mongoose';

const { Schema } = mongoose;
delete mongoose.connection.models['Post'];
const postsSchema = new Schema(
  {
    url: String,
    content: JSON,
    image: String,
    title: String,
    author: String,
    position: JSON,
  },
  { collection: 'posts' }
);

export default mongoose.model('Post', postsSchema);
