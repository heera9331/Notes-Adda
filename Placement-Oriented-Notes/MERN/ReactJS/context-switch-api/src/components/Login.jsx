import { useAuthContext } from "../contexts/authContext";

const Login = () => {
  const { user, setUser, logout, setIsLogin, isLogin } = useAuthContext();

  return (
    <div>
      <h2>Login</h2>
      <form action="#">
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          name="username"
          onChange={(e) => {
            setUser({
              password: user.username,
              username: e.target.value,
            });
          }}
          value={user.username}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setUser({
              username: user.username,
              password: e.target.value,
            });
          }}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            console.log(user);
            setIsLogin(true);
          }}
        >
          Login
        </button>
      </form>
      <p>{isLogin ? "YES" : "NO"}</p>

      {isLogin && (
        <div>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
