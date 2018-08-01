import RecordModel from '../../../db/models/record.model';
import DocumentModel from '../../../db/models/document.model';
import DocumentTypeModel from '../../../db/models/documentType.model';

const handleError = function(err) {
  console.log('error', err);
};

export default async function addRecord(root, { record }) {
  const rModel = new RecordModel();
  const date = new Date();
  const document = record.document;

  let dT = await DocumentTypeModel.findOne({
    category: record.documentType.category,
    subcategory: record.documentType.subcategory,
  }).exec();

  if (!dT) {
    const dTModel = new DocumentTypeModel();

    dTModel.set({
      category: record.documentType.category,
      subcategory: record.documentType.subcategory,
    });

    dTModel.save(function(err) {
      if (err) return handleError(err);
      // saved!
    });

    dT = dTModel;
  }

  const id = '5b5e37a947359809a0d7abae'; //placeholderuser

  //Create document
  const dModel = new DocumentModel();
  dModel.set({
    publishedDate: date,
    recordId: rModel._id,
    url: document.url,
    documentType: dT._id,
    title: document.title,
    geojsonType: document.geojsonType,
    format: document.format,
    source: document.source,
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
    documentType: dT._id,
    thumbnail: record.thumbnail,
  });
  rModel.save(function(err) {
    if (err) return handleError(err);
    // saved!
  });
  return rModel;
}
