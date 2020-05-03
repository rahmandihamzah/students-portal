import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/actionCreators/loginAction";

function Login() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(
      login({
        userInput,
        password,
      })
    );
  };

  return (
    <div>
      <h4>Sign in</h4>
      <div className="w-full max-w-xs">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={(e) => handleLogin(e)}>
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email">
              Email / Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="email"
              id="email"
              aria-describedby="helpId"
              placeholder="email"
              onChange={(e) => {
                setUserInput(e.target.value);
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="password"
              id="password"
              aria-describedby="helpId"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
            {/* <small id="helpId" className="form-text text-muted">Help text</small> */}
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
