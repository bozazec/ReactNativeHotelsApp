import axios from 'axios'
import { AsyncStorage } from 'react-native'
import * as utils from '../lib/utils'
const baseUrl = 'http://127.0.0.1:8000/'

// General
export function req(method, url, params) {

  const body = method === 'get' ? 'params' : 'data';

  const config = {
    method,
    url,
    withCredentials: true,
    baseURL: baseUrl,
    [body]: params || {}
  }

  return axios.request(config);
}

export function authReq(method, url, params) {
  const t = utils.getToken();
  return t.then(res => {
    const token = `Token ${res}`;
    const body = method === 'get' ? 'params' : 'data';

    const config = {
      method,
      url,
      headers: {
        'Authorization': token
      },
      withCredentials: true,
      baseURL: baseUrl,
      [body]: params || {}
    }

    return axios.request(config);
  }).catch(e => {
    console.log('ERROR:', e);
  })
}
