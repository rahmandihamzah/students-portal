import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLoginStatus } from '../../store/actionCreators/loginAction'
// components
import Login from './Login'

function Auth () {
  const history = useHistory()
  const dispatch = useDispatch()
  const loginStatus = useSelector(state => state.loginReducer.loginStatus)

  useEffect(() => {
    if (localStorage.getItem('access_token')) dispatch(setLoginStatus(true))
    if (loginStatus) history.push("/")
  }, 
  [
    history, 
    loginStatus, 
    dispatch
  ])

  return (
    <div>
      <h1>Auth page</h1>
      <Login/>
    </div>
  )
}

export default Auth