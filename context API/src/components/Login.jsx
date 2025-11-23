import React, { useState, useContext } from "react";
import UserContext from "../context/userContex";

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-8 rounded-lg my-10 shadow-md w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
              placeholder="Username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password" // Changed type to password for security
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
