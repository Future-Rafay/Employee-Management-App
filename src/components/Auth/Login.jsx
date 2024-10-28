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
    <div className="flex flex-col h-screen w-screen border-8 border-emerald-400 overflow-hidden">
      {/* <button className="px-3 py-1 bg-emerald-400 text-white h-10 w-auto border-none outline-none text-xl font-semibold">See Emails And Passwords</button> */}

      <div className="flex h-screen w-screen items-center justify-evenly bg-[#1C1C1C]">
        <div className="p-20 border-2 border-emerald-600 rounded-xl">
          <ol>
            <h1 className="text-xl font-semibold ">Employees Emails And Passwords</h1>
            <li className="text-lg leading-7">ali.khan@example.com , 123</li>
            <li className="text-lg leading-7">ayesha.ahmed@example.com , 123</li>
            <li className="text-lg leading-7">bilal.hussain@example.com , 123</li>
            <li className="text-lg leading-7">fatima.riaz@example.com , 123</li>
            <li className="text-lg leading-7">hamza.sheikh@example.com , 123</li>
          </ol>
        </div>
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
        <div className="p-20 border-2 border-emerald-600 rounded-xl">
          <ol>
            <h1 className="text-xl font-semibold">Admin Email And Password</h1>
            <li className="text-lg leading-7">admin@me.com , 123</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Login;
