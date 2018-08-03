import PostModel from '../../../db/models/post.model';

export default function(root, params, context) {
  return PostModel.find();
}
