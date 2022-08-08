import { USER, PRODUCTS } from '../store/data-types';
import { STORE, UPDATE, DELETE } from './action-types';

let idCounter = 100;

export const saveProduct = (product) => {
  return createSaveEvent(PRODUCTS, product);
};

export const saveUser = (user) => {
  return createSaveEvent(USER, user);
};

const createSaveEvent = (dataType, payload) => {
  if (!payload.id) {
    return {
      type: STORE,
      dataType: dataType,
      payload: { ...payload, id: idCounter++ },
    };
  } else {
    return {
      type: UPDATE,
      dataType: dataType,
      payload: payload,
    };
  }
};

export const deleteProduct = (product) => ({
  type: DELETE,
  dataType: PRODUCTS,
  payload: product.id,
});

export const deleteUser = (user) => ({
  type: DELETE,
  dataType: USER,
  payload: user.id,
});
