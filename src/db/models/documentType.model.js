import mongoose from 'mongoose';

const { Schema } = mongoose;
delete mongoose.connection.models['DocumentType'];
const documentTypesSchema = new Schema(
  {
    category: String,
    subcategory: String,
  },
  { collection: 'documentTypes' }
);

export default mongoose.model('DocumentType', documentTypesSchema);
