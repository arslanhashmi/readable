import {
  SET_SORT_ORDER,
  RECEIVE_POSTS,
  RECEIVE_POST,
  POST_ADDED,
  POST_UPDATED,
  POST_DELETED,
  POST_VOTED
} from '../actions';

export function posts(posts = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.data;
    case POST_ADDED:
      return [...posts, action.data];
    case RECEIVE_POST:
    case POST_UPDATED:
    case POST_VOTED:
        return posts.map(post => (
          post.id === action.data.id ? action.data : post
        ))
    case POST_DELETED:
      return posts.filter(post => post.id !== action.data.id);
    default:
      return posts;
  }
}

export function sortOrder(state = 'latest', action) {
  switch (action.type) {
    case SET_SORT_ORDER:
      return action.sortOrder;
    default:
      return state;
  }
}
