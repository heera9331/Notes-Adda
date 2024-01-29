import "./App.css";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";
import React, { useState, Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
  }

  render() {
    return (
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={this.state.username}
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        />
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Header title="header" />
      <Input />
    </>
  );
}

export default App;
