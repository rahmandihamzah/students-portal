import {
  SET_LOADING,
  SET_ERROR,
  SET_ACCESS_TOKEN
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

export function login () {
  return function (dispatch) {
    dispatch(setLoading(true))
    return studentsPortalApi({
      method: 'POST',
      ulr: '/admin/signIn'
    })
      .then(({ data } )=> {
        dispatch(setAccessToken(data.access_token))
      })
      .catch(({ response }) => {
        dispatch(setError(response.data.msg))
      })
      .finally(_ => {
        dispatch(setLoading(false))
      })
  }
}