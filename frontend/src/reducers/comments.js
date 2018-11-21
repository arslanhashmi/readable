import {
  RECEIVE_COMMENTS,
  COMMENT_ADDED,
  COMMENT_UPDATED,
  COMMENT_DELETED,
  COMMENT_VOTED
} from '../actions';

export function comments(comments = [], action) {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.data;
    case COMMENT_ADDED:
      return [...comments, action.data];
    case COMMENT_UPDATED:
    case COMMENT_VOTED:
      return comments.map(comment => (
        comment.id === action.data.id ? action.data : comment
      ));
    case COMMENT_DELETED:
      return comments.filter(comment => comment.id !== action.data.id);
    default:
      return comments;
  }
}
