import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const hotelCounter = createReducer(0, {
  [types.ADD_HOTEL](state, action) {
    return state + 1;
  },
  [types.REMOVE_HOTEL](state, action) {
    const newState = state - 1;
    return newState > 0 ? newState : 0;
  }
});

export const hotels = createReducer([], {
  [types.SET_HOTELS](state, action) {
    return action.hotels;
  }
})