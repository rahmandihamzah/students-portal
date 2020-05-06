import React, { useState } from 'react'
import { studentsPortalApi } from '../../api/studentsPortalApi'

function Register({ setIsLoginPage }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const showLogin = () => {
    setIsLoginPage(true)
  }

  const register = (e) => {
    e.preventDefault()
    studentsPortalApi({
      method: 'POST',
      url: 'admin/signUp',
      data: {
        firstName,
        lastName,
        email,
        userName,
        phoneNumber,
        password,
      },
    })
      .then(({ data }) => {
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="w-full">
      <h1>Sign Up</h1>
      <div>
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => register(e)}>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="firstName"
              id="firstName"
              aria-describedby="helpId"
              placeholder="First Name"
              onChange={(e) => {
                setFirstName(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="lastName"
              id="lastName"
              aria-describedby="helpId"
              placeholder="Last Name"
              onChange={(e) => {
                setLastName(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="userName">
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="userName"
              id="userName"
              aria-describedby="helpId"
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber">
              Phone number
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="phoneNumber"
              id="phoneNumber"
              aria-describedby="helpId"
              placeholder="Phone number"
              onChange={(e) => {
                setPhoneNumber(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email">
              Email
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              aria-describedby="helpId"
              placeholder="email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded md:w-full py-2 px-3 mb-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              aria-describedby="helpId"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <div className="flex items-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-5 rounded focus:outline-none focus:shadow-outline"
              type="submit">
              Sign up
            </button>
            <h2 onClick={() => showLogin()}>sign in here</h2>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
