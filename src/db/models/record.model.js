import mongoose from 'mongoose';

const { Schema } = mongoose;

const recordsSchema = new Schema(
  {
    title: String,
    thumbnail: String,
    documentType: Schema.Types.ObjectId,
    documents: [Schema.Types.ObjectId],
  },
  { collection: 'records' }
);

export default mongoose.model('Record', recordsSchema);
