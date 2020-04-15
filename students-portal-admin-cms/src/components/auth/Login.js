import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actionCreators/loginAction'

function Login () {
  const dispatch = useDispatch()
  const [userInput, setUserInput] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(login({
      userInput,
      password
    }))
  }

  return (
    <div>
      <h4>Sign in form</h4>
      <form onSubmit={(e) => handleLogin(e)}>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="text" className="form-control" name="email" id="email" aria-describedby="helpId" placeholder="email" onChange={(e) => { setUserInput(e.target.value) }}></input>
          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password" className="form-control" name="password" id="password" aria-describedby="helpId" placeholder="password" onChange={(e) => { setPassword(e.target.value) }}></input>
          {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
        </div>
        <button type="submit">Sign in</button>
      </form>
    </div>
  )
}

export default Login