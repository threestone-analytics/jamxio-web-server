import RecordModel from '../../../db/models/record.model';
import UserModel from '../../../db/models/user.model';
import PublisherModel from '../../../db/models/publisher.model';
import DocumentModel from '../../../db/models/document.model';
import { saveMap } from './handlers';

const handleError = function(err) {
  console.log('error', err);
};
export default function addDocument(root, { record }) {
  console.log(record);

  saveMap(record.document.geometry);
  const date = new Date();
  const id = '5b5e37a947359809a0d7abae';

  //Create document
  const dModel = new DocumentModel();
  dModel.set({
    format: record.document.format,
    source: record.document.source,
    url: record.document.url,
    recordId: record.document.recordId,
    documentType: record.document.documentType,
    geojsonType: record.document.geojsonType,
    geometry: { data: 'data' },
    publishedDate: date,
    publisher: id,
  });
  dModel.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });

  //Update record solo tienes que hacer push
  const rModel = RecordModel.findByIdAndUpdate(
    record.id,
    { $push: { documents: dModel } },
    { new: true }
  ).catch(err => new Error(err));

  return rModel;
}
