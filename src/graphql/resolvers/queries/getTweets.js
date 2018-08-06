import TweetModel from '../../../db/models/tweet.model';

export default function(root, params, context) {
  return TweetModel.find();
}
