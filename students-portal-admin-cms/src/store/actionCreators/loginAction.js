import {
  SET_LOADING,
  SET_ERROR,
  SET_ACCESS_TOKEN,
  SET_LOGIN_STATUS
} from '../actionTypes'
import { studentsPortalApi } from '../../api/studentsProtalApi'

export function setLoading (value) {
  return {
    type: SET_LOADING,
    payload: value
  }
}

export function setError (value) {
  return {
    type: SET_ERROR,
    payload: value
  }
}

export function setAccessToken (value) {
  return {
    type: SET_ACCESS_TOKEN,
    payload: value
  }
}

export function setLoginStatus (value) {
  return {
    type: SET_LOGIN_STATUS,
    payload: value
  }
}

export function login (payload) {
  const { userInput, password } = payload
  return function (dispatch) {
    dispatch(setLoading(true))
    return studentsPortalApi({
      method: 'POST',
      url: '/admin/signIn',
      data: {
        userInput,
        password
      }
    })
      .then(({ data } )=> {
        dispatch(setAccessToken(data.access_token))
        dispatch(setLoginStatus(true))
        localStorage.setItem('access_token', data.access_token)
      })
      .catch(err => {
        dispatch(setError(err.response.data.msg))
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}