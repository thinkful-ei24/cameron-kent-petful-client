import {
  FETCH_DOG_SUCCESS,
  FETCH_DOG_REQUEST,
  FETCH_DOG_ERROR
} from '../actions/index';

const initialState = {
  data: null,
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  if (action.type === FETCH_DOG_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  }  if (action.type === FETCH_DOG_SUCCESS) {
    return Object.assign({}, state, {
      data: action.data,
      error: null,
      loading: false
    });
  }
  if (action.type === FETCH_DOG_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
}