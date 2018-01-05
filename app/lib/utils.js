import { AsyncStorage } from 'react-native'

export async function isLogged() {
  const token = await AsyncStorage.getItem('token');
  if(token !== null) {
    console.log('token:', token);
    return true;
  } else {
    console.log('NOTHING');
    return false;
  }
}

export async function getToken() {
  const token = await AsyncStorage.getItem('token')
  return token
}

export async function setToken(token) {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (e) {
    console.log('error set token:',e);
  }
}
export async function removeToken() {
  try {
    await AsyncStorage.removeItem('token');
  } catch(e) {
    console.log('error remove token:', e);
  }
}