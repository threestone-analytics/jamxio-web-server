import RecordModel from '../../../db/models/record.model';
import UserModel from '../../../db/models/user.model';
import PublisherModel from '../../../db/models/publisher.model';
import DocumentModel from '../../../db/models/document.model';
import DocumentTypeModel from '../../../db/models/documentType.model';

const handleError = function(err) {
  console.log('error', err);
};
export default function addRecord(root, { record }) {
  const dTModel = new DocumentTypeModel();
  const rModel = new RecordModel();
  const date = new Date();
  dTModel.set({
    category: record.document.documentType.category,
    subcategory: record.document.documentType.subcategory,
  });
  dTModel.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
  const id = '5b5e37a947359809a0d7abae';
  //Create document
  const dModel = new DocumentModel();
  dModel.set({
    publishedDate: date,
    recordId: rModel._id,
    url: record.document.url,
    documentType: dTModel._id,
    title: record.document.title,
    geojsonType: record.document.geojsonType,
    format: record.document.format,
    source: record.document.source,
    publisher: id,
  });
  dModel.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });

  //Create record solo tienes que hacer push

  rModel.set({
    documents: [dModel],
    title: record.title,
    documentType: dTModel._id,
    thumbnail: record.thumbnail,
  });
  rModel.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
  return rModel;
}
