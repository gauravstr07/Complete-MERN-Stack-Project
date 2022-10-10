import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    console.log(email, password);
  }
  return (
    <div className="login">
      <h1 className="Lh1">Login Page</h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="inputBox"
        type="text"
        placeholder="enter email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="inputBox"
        type="password"
        placeholder="enter password"
      />
      <button onClick={handleLogin} className="appbutton" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
