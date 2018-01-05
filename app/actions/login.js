import * as Api from '../lib/api'
import * as types from './types'
import * as utils from '../lib/utils'

export function login(params) {
  return (dispatch, getState) => {
    return Api.req('post', 'api-token-auth/', params).then(res => {
      const user = {}
      user.email = res.data.email
      user.firstName = res.data.first_name
      user.lastName = res.data.last_name
      user.username = res.data.username
      user.token = res.data.token
      dispatch({
        type: types.SET_USER,
        user
      })
      const token = res.data.token
      return token;
    }).catch(e => {
      console.log("ERROR LOGIN", e);
      return Promise.reject();
    })
  }
}

export function logOut() {
  utils.removeToken();
  return {
    type: types.LOG_OUT
  }
}