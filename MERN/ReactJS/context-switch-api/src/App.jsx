import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <>
      <h1>React with Chai and share is important</h1>
      <Login value={handleLogin} />
      <Profile />
    </>
  );
}

export default App;
