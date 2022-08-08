import {
  CREATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  ADD_USER,
} from '../actions/action-types';

const initialState = {
  userId: '',
  username: '',
  details: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_USER}`:
      return {
        ...state,
        username: action.username,
      };
    case `${CREATE_USER}_ACK`:
      return {
        ...state,
        ...action.payload,
      };
    case `${CREATE_USER}_ERR`:
      return {
        ...state,
        userId: '',
      };
    case `${LOGIN_USER}_ACK`:
      return {
        ...state,
        userId: action.payload.userId,
        details: action.payload,
      };
    case `${LOGIN_USER}_ERR`:
      return {
        ...state,
        userId: '',
      };
    case `${LOGOUT_USER}`:
      return {
        ...state,
        userId: '',
        details: {},
      };
    default:
      return state;
  }
};

export const isActive = (state) => state.userId !== '';

export default user;
