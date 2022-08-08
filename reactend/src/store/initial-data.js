import { PRODUCTS, USERS, USER } from './data-types';

export const initialData = {
  modelData: {
    [PRODUCTS]: [
      { id: 1, name: 'Trail Shoes', category: 'Running', price: 100 },
      { id: 2, name: 'Thermal Hat', category: 'Running', price: 12 },
      { id: 3, name: 'Heated Gloves', category: 'Running', price: 82.5 },
    ],
    [USERS]: [
      { id: 1, username: 'bakis', password: 'bakis', confpassword: 'bakis' },
      { id: 2, username: 'bilge', password: 'bilge', confpassword: 'bilge' },
    ],
    [USER]: {
      id: 1,
      username: 'bakis',
      password: 'bakis',
      confpassword: 'bakis',
    },
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: USER,
  },
};
