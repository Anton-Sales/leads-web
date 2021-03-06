const decode = require('jwt-decode')

import { get, set } from './localstorage'

export function isAuthenticated () {
  const token = get('token')

  console.log(token)

  if (token) {
    const payload = decode(token)
    const expiry = payload.exp

    if (expiry < new Date().getTime() / 1000) {
      removeUser()
      return false
    }
    return true
  } else {
    return false
  }
}

export function saveUserToken (token) {
  // console.log('here\'s the user token being passed into set : ' + token) // token exists here...

  set('token', token) // but token isn't being 'set' here...
  return decode(token)
}

export function getUserTokenInfo () {
  const token = get('token')
  return token ? decode(token) : null
}

export function removeUser () {
  set('token', null)
}
