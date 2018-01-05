import * as types from './types'
import * as Api from '../lib/api'

export function addHotel() {
  return {
    type: types.ADD_HOTEL
  }
}

export function removeHotel() {
  return {
    type: types.REMOVE_HOTEL
  }
}

export function loadHotels() {
  return (dispatch, state) => {
    return Api.authReq('get', 'hotel_api/').then(res => {
      console.log('ResHotel:', res);
      dispatch({
        type: types.SET_HOTELS,
        hotels: res.data
      })
    }).catch(e => {
      console.log('ERROR GETTING HOTELS: ', e)
    })
  }
}

export function getFavorites() {
  return dispatch => {
    return Api.authReq('get', 'favorites/').then(res => {
      return res.data
    }).catch(() => {
      console.log('ERROR fetching favorites hotels')
    })
  }
}


