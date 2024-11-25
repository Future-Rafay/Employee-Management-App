import React, { useState } from "react";

const Login = (props) => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const employees = [
    { email: "ali.khan@example.com", password: "123" },
    { email: "ayesha.ahmed@example.com", password: "123" },
    { email: "bilal.hussain@example.com", password: "123" },
    { email: "fatima.riaz@example.com", password: "123" },
    { email: "hamza.sheikh@example.com", password: "123" },
  ];

  const admin = { email: "admin@me.com", password: "123" };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setSelectedEmail(email);
    // Set password based on selected email
    const selectedEmployee = employees.find(emp => emp.email === email);
    setPassword(selectedEmployee ? selectedEmployee.password : (email === admin.email ? admin.password : ""));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.handleLogin(selectedEmail, password);
    setSelectedEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white">
    <div className="flex items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-center">Login to Your Account</h1>
    </div>
    
    <div className="flex h-full items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl bg-gray-900 shadow-lg p-10 w-full sm:w-96">
        <form onSubmit={submitHandler} className="flex flex-col items-center space-y-6">
          
          {/* Email Dropdown */}
          <div className="w-full">
            <select
              id="email"
              value={selectedEmail}
              onChange={handleEmailChange}
              required
              className="border-2 border-emerald-600 px-5 py-3 rounded-full text-lg bg-transparent placeholder:text-gray-300 w-full focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              <option className="bg-gray-900" value="" disabled>Select Email</option>
              {employees.map((emp) => (
                <option className="bg-gray-900" key={emp.email} value={emp.email}>
                  {emp.email}
                </option>
              ))}
              <option className="bg-green-300 text-black" value={admin.email}>{admin.email}</option>
            </select>
          </div>
  
          {/* Password Input */}
          <div className="w-full">
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              placeholder="Enter Password"
              className="border-2 border-emerald-600 px-5 py-3 rounded-full text-lg bg-transparent placeholder:text-gray-300 w-full focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>
  
          {/* Submit Button */}
          <button className="bg-emerald-600 px-8 py-2 mt-7 rounded-full font-semibold text-lg hover:bg-emerald-500 transition duration-300 ease-in-out">
            Log in
          </button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Login;

