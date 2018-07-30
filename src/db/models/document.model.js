import mongoose from 'mongoose';

const { Schema } = mongoose;

const documentsSchema = new Schema(
  {
    recordId: Schema.Types.ObjectId,
    url: String,
    format: String,
    source: String,
    geometry: JSON,
    geojsonType: String,
    publishedDate: Date,
    publisher: Schema.Types.ObjectId,
    documentType: Schema.Types.ObjectId,
  },
  { collection: 'documents' }
);

export default mongoose.model('Document', documentsSchema);
