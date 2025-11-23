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
    <div>
      <h1>login</h1>
      <input
        type="text"
        value={userName}
        onChange={(e) => setuserName(e.target.value)}
        placeholder="username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
