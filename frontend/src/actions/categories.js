import * as API from '../utils/api';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';

// Get categories
export const receiveCategories = data => ({
  type: RECEIVE_CATEGORIES,
  data
});
export const getCategories = () => dispatch => (
  API.getCategories().then(data => dispatch(receiveCategories(data)))
);
