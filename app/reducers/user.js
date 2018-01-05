import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const user = createReducer({token: null}, {
  [types.SET_USER](state, action) {
    return Object.assign({}, state, action.user)
  },
  [types.LOG_OUT](state, action) {
    return Object.assign({}, {token: null})
  }
});