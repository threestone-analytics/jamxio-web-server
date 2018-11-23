export default {
  async recordId({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.recordId;
  },
  async url({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.url;
  },
  async geometry({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.geometry;
  },
  async title({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.title;
  },
  async color({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.color;
  },
  async publisher({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.publisher;
  },
  async format({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.format;
  },
  async publishedDate({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.publishedDate;
  },
  async geojsonType({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.geojsonType;
  },
  async source({ _id }, contex, { loaders }) {
    const data = await loaders.getDocument.load(_id);
    return data.source;
  },
};
