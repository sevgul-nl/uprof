import { combineReducers } from 'redux';
import user, * as fromUser from './user';

//import { reducer as formReducer } from 'react-final-form';

export default combineReducers({
  user,
  //container,
  //form: formReducer,
});

// TODO: rename selectors?
export const isActive = (state) => fromUser.isActive(state.user);
export const getUserId = (state) => {
  return state.user.userId;
};
export const getUsername = (state) => {
  return state.user.username;
};
