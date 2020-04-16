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
    <div className="flex border grid grid-cols-4 min-h-screen">
      <div className="border flex justify-center items-center">
        <Login />
      </div>
      <div className="border col-start-2 col-end-5 flex items-center justify-center">
        <h1>Auth page</h1>
      </div>
    </div>
  )
}

export default Auth