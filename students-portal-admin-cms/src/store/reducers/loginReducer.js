import {
  SET_LOADING,
  SET_ERROR,
  SET_ACCESS_TOKEN,
  SET_LOGIN_STATUS
} from '../actionTypes'

const initialState = {
  loading: false,
  error: '',
  access_token: '',
  loginStatus: false
}

function loginReducer (state = initialState, action) {
  if (action.type === SET_ACCESS_TOKEN) {
    return {
      ...state,
      access_token: action.payload
    }
  }

  if (action.type === SET_LOGIN_STATUS) {
    return {
      ...state,
      loginStatus: action.payload
    }
  }

  if (action.type === SET_LOADING) {
    return {
      ...state,
      loading: action.payload
    }
  }

  if (action.type === SET_ERROR) {
    return {
      ...state,
      error: action.payload
    }
  }

  return state
}

export default loginReducer