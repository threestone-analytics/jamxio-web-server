import DocumentModel from '../../../db/models/document.model';
import RecordModel from '../../../db/models/record.model';
import {layerColor} from "./colors";

export default async function(root, { _id }, context) {
  const records = await RecordModel.find();
  const dataPromises = records.map((record, i) => {

    const data = DocumentModel.findOneAndUpdate(
      { recordId: record._id },
      { title: record.title, color: layerColor[i] },
      { sort: { publishedDate: -1 } }
    ).exec();
    return data;
  });

  let dat = await Promise.all(dataPromises).then(a => a);
  dat = dat.filter(n => n);

  return dat;
}
