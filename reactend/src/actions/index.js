import * as types from '../constants/ActionTypes';

const request = require('superagent-promise')(require('superagent'), Promise);

const API = '/api';
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
  const url = `${API}/user/`;
  let dispatchObj = {
    type: types.CREATE_USER,
    payload: {
      promise: request
        .post(url)
        .set('Content-Type', 'application/json')
        .accept('application/json')
        .send(
          //TODO: take out hard coded values for user information
          {
            address: '144 Townsend Street',
            email: 'test@gmail.com',
            name: 'Jess',
            password: password,
            phone: '9999999999',
            username: username,
            userId: 0,
            enabled: 'true',
            role: 'user',
          }
        )
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
  let dispatchObj = {
    type: types.LOGIN_USER,
    payload: {
      promise: request
        .post('/login/')
        .set('Content-Type', 'application/json')
        .accept('application/json')
        .send({
          username: username,
          password: password,
        })
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
