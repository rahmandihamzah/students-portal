import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {
  setLoginStatus,
  setAccessToken,
} from "../../store/actionCreators/loginAction"

function DashboardHome() {
  const history = useHistory()
  const dispatch = useDispatch()
  const loginStatus = useSelector((state) => state.loginReducer.loginStatus)

  const logout = (_) => {
    dispatch(setLoginStatus(false))
    dispatch(setAccessToken(""))
    localStorage.removeItem("access_token")
  }

  useEffect(() => {
    if (localStorage.getItem("access_token")) dispatch(setLoginStatus(true))
    if (!loginStatus) history.push("/auth")
  }, [history, loginStatus, dispatch])

  return (
    <div>
      <h1>Welcome to admin dashboard</h1>
      <button onClick={() => logout()}>Sign out</button>
    </div>
  )
}

export default DashboardHome
