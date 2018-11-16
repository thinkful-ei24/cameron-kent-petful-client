// Remove when actions are complete
import {
  FETCH_CAT_SUCCESS,
  FETCH_CAT_REQUEST,
  FETCH_CAT_ERROR
} from '../actions/index';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_CAT_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  }  if (action.type === FETCH_CAT_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null,
      loading: false
    });
  }
  if (action.type === FETCH_CAT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}