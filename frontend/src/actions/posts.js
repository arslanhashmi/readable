import * as API from '../utils/api';

export const SET_SORT_ORDER = 'SET_SORT_ORDER';
export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const POST_ADDED = 'POST_ADDED';
export const POST_UPDATED = 'POST_UPDATED';
export const POST_DELETED = 'POST_DELETED';
export const POST_VOTED = 'POST_VOTED';

// Set posts' sorting order
export const setSortOrder = sortOrder => ({
  type: SET_SORT_ORDER,
  sortOrder
});

// Get posts
export const receivePosts = data => ({
  type: RECEIVE_POSTS,
  data
});
export const getPosts = () => dispatch => (
  API.getPosts().then(data => dispatch(receivePosts(data)))
);

// Get post
export const receivePost = data => ({
  type: RECEIVE_POST,
  data
});
export const getPost = (post_id) => dispatch => (
  API.getPost(post_id).then(data => dispatch(receivePost(data)))
);

// Add a post
export const postAdded = data => ({ type: POST_ADDED, data });
export const addPost = post => dispatch => (
  API.addPost(post).then(data => dispatch(postAdded(data)))
);

// Update a post
export const postUpdated = data => ({
  type: POST_UPDATED,
  data
});
export const updatePost = post => dispatch => (
  API.updatePost(post).then(data => dispatch(postUpdated(data)))
);

// Delete a post
export const postDeleted = data => ({ type: POST_DELETED, data });
export const deletePost = post => dispatch => (
  API.deletePost(post).then(data => dispatch(postDeleted(data)))
);

// Vote a post
export const postVoted = data => ({ type: POST_VOTED, data });
export const votePost = (post, vote) => dispatch => (
  API.votePost(post, vote).then(data => dispatch(postVoted(data)))
);
