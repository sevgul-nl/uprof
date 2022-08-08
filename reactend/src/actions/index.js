import * as types from './action-types';

const request = require('superagent-promise')(require('superagent'), Promise);

//const API = '/uprof/api';
//const API = 'http://sevgul.nl/uprof/api';
const API = 'http://localhost:8081/uprof/api';
const UTILITY = '/utility';

export const fetchAllUsers = () => (dispatch) => {
  let dispatchObj = {
    type: types.FETCH_USERS,
    payload: {
      promise: request
        .get(`${API}/user/`)
        .accept('application/json')
        .end()
        .then((res) => res.body),
    },
  };
  return dispatch(dispatchObj);
};

export const createUser = (username, password) => (dispatch) => {
  const url = `${API}/signup/`;
  let dispatchObj = {
    type: types.CREATE_USER,
    payload: {
      promise: request
        .post(url)
        .set('Content-Type', 'application/json')
        .accept('application/json')
        .send({ username: username, password: password })
        .end()
        .then((res) => res.body),
    },
  };

  return dispatch(dispatchObj);
};

export const getUser = (username, password) => (dispatch) => {
  //TODO: update actions
  let dispatchObj = {
    type: types.LOGIN_USER,
    payload: {
      promise: request
        .get(`${API}/user/username=${username}`)
        .accept('application/json')
        .end()
        .then((res) => res.body),
    },
  };
  return dispatch(dispatchObj);
};

export const loginUser = (username, password) => (dispatch) => {
  const url = `${API}/signin/`;
  let dispatchObj = {
    type: types.LOGIN_USER,
    payload: {
      promise: request
        .post(url)
        .set('Content-Type', 'application/json')
        .accept('application/json')
        .send({ username: username, password: password })
        .end()
        .then((res) => res.body),
    },
  };

  return dispatch(dispatchObj);
};

export const fetchContainerId = () => (dispatch) => {
  const url = `${UTILITY}/containerid/`;
  let dispatchObj = {
    type: types.FETCH_CONTAINER_ID,
    payload: {
      promise: request
        .get(url)
        .accept('application/json')
        .end()
        .then((res) => res.body),
    },
  };
  return dispatch(dispatchObj);
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT_USER,
  });
};

export const addUser = (username) => (dispatch) => {
  dispatch({
    type: types.ADD_USER,
    username,
  });
};
