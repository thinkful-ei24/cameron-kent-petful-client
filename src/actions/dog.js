import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';


export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => {
  return ({
    type: FETCH_DOG_REQUEST
  }) ;
};

export const FETCH_DOG_SUCCESS= 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess= (dogObj) => {
  return ({
    type: FETCH_DOG_SUCCESS,
    data: dogObj
  }) ;
};

export const FETCH_DOG_ERROR= 'FETCH_DOG_ERROR';
export const fetchDogError= (err) => {
  return ({
    type: FETCH_DOG_ERROR,
    error: err
  }) ;
};


export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`)
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then((res) => dispatch(fetchDogSuccess(res)))
    .catch(err => dispatch(fetchDogError(err)));
};

export const deleteDog = () => dispatch => {
  dispatch(fetchDogRequest());
  return fetch(`${API_BASE_URL}/api/dog`, {
    method: 'DELETE'
  })
    .then(res => normalizeResponseErrors(res))
    .then(() => dispatch(fetchDog()))
    .catch(err => dispatch(fetchDogError(err)));
};