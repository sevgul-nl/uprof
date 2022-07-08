import { combineReducers } from 'redux';
import user, * as fromUser from './user';
import container from './container';
//import { reducer as formReducer } from 'react-final-form';

export default combineReducers({
  user,
  container,
  //form: formReducer,
});

// TODO: rename selectors?
export const isActive = (state) => fromUser.isActive(state.customer);
export const getIP = (state) => {
  return state.container.ip;
};
export const getHost = (state) => {
  return state.container.host;
};
export const getUserId = (state) => {
  return state.customer.customerId;
};
export const getUsername = (state) => {
  return state.customer.username;
};

export const getQuantityById = (state) => {
  return state.cart.quantityById;
};

export const itemJustAddedSelector = (state) => {
  return state.cart.itemJustAdded;
};
