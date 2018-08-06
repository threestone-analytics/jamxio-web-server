export default {
  async url({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.url;
  },
  async content({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.content;
  },
  async image({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.image;
  },
  async title({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.title;
  },
  async author({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.author;
  },
  async position({ _id }, contex, { loaders }) {
    const data = await loaders.getTweet.load(_id);
    return data.position;
  },
};
