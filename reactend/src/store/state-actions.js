import { USER, PRODUCTS } from './data-types';

export const STATE_START_EDITING = 'state_start_editing';
export const STATE_END_EDITING = 'state_end_editing';
export const STATE_START_CREATING = 'state_start_creating';

export const startEditingProduct = (product) => ({
  type: STATE_START_EDITING,
  dataType: PRODUCTS,
  payload: product,
});

export const startEditingUser = (user) => ({
  type: STATE_START_EDITING,
  dataType: USER,
  payload: user,
});

export const endEditing = () => ({
  type: STATE_END_EDITING,
});

export const startCreatingProduct = () => ({
  type: STATE_START_CREATING,
  dataType: PRODUCTS,
});

export const startCreatingUser = () => ({
  type: STATE_START_CREATING,
  dataType: USER,
});
