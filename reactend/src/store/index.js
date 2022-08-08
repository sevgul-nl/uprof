import { createStore, combineReducers } from 'redux';
import modelReducer from '../model/reducer';
import stateReducer from '../state/reducer';

export default createStore(
  combineReducers({
    modelData: modelReducer,
    stateData: stateReducer,
  })
);
