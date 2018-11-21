import { RECEIVE_CATEGORIES } from '../actions';

export function categories(categories = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return action.data.categories;
    default:
      return categories;
  }
}
