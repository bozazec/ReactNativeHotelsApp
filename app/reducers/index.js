import { combineReducers } from 'redux';
import * as hotelReducer from './hotel';
import * as userReducer from './user';

export default combineReducers(Object.assign(hotelReducer, userReducer));