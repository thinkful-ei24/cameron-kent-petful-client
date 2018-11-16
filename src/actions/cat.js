import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const FETCH_CAT_REQUEST = 'FETCH_CAT_REQUEST';
export const fetchCatRequest = () => {
  return ({
    type: FETCH_CAT_REQUEST
  }) ;
};

export const FETCH_CAT_SUCCESS= 'FETCH_CAT_SUCCESS';
export const fetchCatSuccess= (catObj) => {
  return ({
    type: FETCH_CAT_SUCCESS,
    data: catObj
  }) ;
};

export const FETCH_CAT_ERROR= 'FETCH_CAT_ERROR';
export const fetchCatError= (err) => {
  return ({
    type: FETCH_CAT_ERROR,
    error: err
  }) ;
};


export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => dispatch(fetchCatSuccess(res)))
    .catch(err => dispatch(fetchCatError(err)));
};

export const deleteCat = () => dispatch => {
  dispatch(fetchCatRequest());
  return fetch(`${API_BASE_URL}/api/cat`, {
    method: 'DELETE'
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => dispatch(fetchCat()))
    .catch(err => dispatch(fetchCatError(err)));
};