import * as API from '../utils/api';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const COMMENT_ADDED = 'COMMENT_ADDED';
export const COMMENT_UPDATED = 'COMMENT_UPDATED';
export const COMMENT_DELETED = 'COMMENT_DELETED';
export const COMMENT_VOTED = 'COMMENT_VOTED';

// Get comments
export const receiveComments = data => ({
  type: RECEIVE_COMMENTS,
  data
});
export const getComments = post_id => dispatch => (
  API.getComments(post_id).then(data => dispatch(receiveComments(data)))
);

// Add a comment to a post
export const commentAdded = data => ({ type: COMMENT_ADDED, data });
export const addComment = comment => dispatch => (
  API.addComment(comment).then(data => dispatch(commentAdded(data)))
);

// Update a comment
export const commentUpdated = data => ({ type: COMMENT_UPDATED, data });
export const updateComment = comment => dispatch => (
  API.updateComment(comment).then(data => dispatch(commentUpdated(data)))
);

// Delete a comment
export const commentDeleted = data => ({ type: COMMENT_DELETED, data });
export const deleteComment = comment => dispatch => (
  API.deleteComment(comment).then(data => dispatch(commentDeleted(data)))
);

// Vote a coment
export const commentVoted = data => ({ type: COMMENT_VOTED, data });
export const voteComment = (comment, vote) => dispatch => (
  API.voteComment(comment, vote).then(data => dispatch(commentVoted(data)))
);
