import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { login } from '../../store/actionCreators/loginAction'

function Auth () {
  const access_token = useSelector(state => state.loginReducer.access_token)
  return (
    <div>
      <h1>Auth page</h1>
    </div>
  )
}

export default Auth