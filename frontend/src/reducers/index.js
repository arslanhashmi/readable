
import { combineReducers } from 'redux';
import { posts, sortOrder } from './posts';
import { categories } from './categories';
import { comments } from './comments';

export default combineReducers({
  posts,
  categories,
  comments,
  sortOrder
});
