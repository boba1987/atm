import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import atmReducer from './atmReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  atmReducer
});

export default rootReducer;
