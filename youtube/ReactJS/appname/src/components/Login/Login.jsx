import { useState } from "react";

function Login() {
  const [user, setUser] = useState({ username: "", password: "" });

  function handleLogin(e) {
    // api request
    console.log(user);
  }

  return (
    <form
      action="#"
      method="GET"
      style={{ border: "1px solid black", padding: "2rem" }}
    >
      <div>
        <label htmlFor="username">Username</label>
        <input
          placeholder={"Username"}
          type="text"
          value={user.username}
          onChange={(e) => {
            setUser({ username: e.target.value, password: user.password });
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          placeholder={"Password"}
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({ password: e.target.value, username: user.username });
          }}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(e);
        }}
      >
        Login
      </button>
    </form>
  );
}

export default Login;
