import React from "react";
import { useState } from "react";

const Login = (props) => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center p-20"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 px-5 py-3 rounded-full text-xl text-white outline-none bg-transparent  placeholder:text-gray-300"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="border-2 border-emerald-600 px-5 py-3 mt-3 rounded-full text-xl text-white outline-none bg-transparent placeholder:text-gray-300"
            type="password"
            placeholder="Enter Password"
          />
          <button className=" bg-emerald-600 px-8 w-full py-2 mt-7 rounded-full font-semibold text-lg text-white outline-none hover:bg-emerald-600 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
