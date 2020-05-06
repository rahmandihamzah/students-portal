import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setLoginStatus } from '../../store/actionCreators/loginAction'

// components
import Login from './Login'
import Register from './Register'

function Auth() {
  const history = useHistory()
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => state.loginReducer.loginStatus)
  const [isLoginPage, setIsLoginPage] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('access_token')) dispatch(setLoginStatus(true))
    if (loginStatus) history.push('/')
  }, [history, loginStatus, dispatch])

  return (
    <div className="flex justify-center border-black w-full min-h-screen bg-gray-200">
      <div className="mx-20 flex md:w-1/3 justify-center items-center">
        {isLoginPage ? (
          <Login setIsLoginPage={setIsLoginPage} />
        ) : (
          <Register setIsLoginPage={setIsLoginPage} />
        )}
      </div>
      <div className="flex invisible md:visible w-full items-center justify-center bg-blue-900">
        <h1>Auth page</h1>
      </div>
    </div>
  )
}

export default Auth
