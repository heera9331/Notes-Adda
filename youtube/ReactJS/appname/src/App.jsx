/* eslint-disable no-unused-vars */
import "./App.css";

import React, { Component, useState } from "react";

class MyCounter extends Component {
  // 1.
  constructor() {
    console.log("inside constructor");
    super();
    this.state = {
      count: 0,
    };
  }
  // 2.
  static getDerivedStateFromProps(props, state) {
    console.log("inside getDerivedStateFromProps");
  }

  // 4.
  componentDidMount() {
    console.log("inside componentDidMount");
  }

  // 5
  shouldComponentUpdate(nextProps, nextState) {
    console.log("inside shouldComponentUpdate");
    console.log(nextProps);
    console.log(nextState);
    if (nextState.count !== this.state.count) return true;

    return false;
  }

  componentWillUnmount() {
    console.log("inside componentWillUnmount");
  }

  // 3.
  render() {
    console.log("inside render");
    return (
      <div>
        <p>Value {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

function App() {
  const [click, setClick] = useState(false);
  return (
    <>
      <h1>ReactJS</h1>
      <button
        onClick={() => {
          setClick(!click);
        }}
      >
        {click ? "Hide" : "Show"} counter
      </button>
      {click && <MyCounter count={1} />}
    </>
  );
}

export default App;
