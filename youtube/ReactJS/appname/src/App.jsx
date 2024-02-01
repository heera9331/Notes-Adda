/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";
import { Component, useState } from "react";

class Counter extends Component {
  /**
   * initialization of component states
   */
  constructor() {
    super();
    console.log("inside constructor");
    this.state = {
      counter: 0,
      title: "My Counter",
    };
  }

  /**
   * we want access of original props than we use this method otherwise
   * we take parameters inside constructor
   */
  static getDerivedStateFromProps(props, state) {
    console.log("inside getDerivedPropsFromState");
    return { ...state, title: props.title };
  }

  /**
   * after then render of dom, the last method componentDidMount will call
   * use: api calls, async event listner
   *
   * note: invoked once and immediately after React inserts the component
   * into the Dom
   * - Called immediately after a component is mounted. Setting state here will trigger re-rendering.
   */

  componentDidMount() {
    console.log("inside componentDidMount");
    // api call -> fakeapi
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    /**
     * if nextProps == nextState
     *  not re-render
     * else
     *  re-render => render()
     */
    return true;
  }

  /**
   * it will return snapshot of props and state before udpate
   * update karne se pahle jo state and props the unhe return karega
   */
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("inside getSnapshotBeforeUpdate");
    console.log(prevProps);
    console.log(prevState);

    return prevState;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  componentWillUnmount() {
    /**
     * cleaning tasks such as clearInterval
     *
     * question -> should we set state in componentWillUnmount() => no
     * you sould not cal setState(). once a component instance is unmounted,
     * it will never be mounted again.
     */
  }
  render() {
    console.log("inside render");
    return (
      <div>
        <h1>Title: {this.state.title}</h1>
        <p>Counter - {this.state.counter}</p>
        <button
          onClick={() => {
            this.setState({ ...this.state, counter: this.state.counter + 1 });
          }}
        >
          click
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <>
      <Header title="header" />
      <Counter title={"My Fav Counter"} />
    </>
  );
}

export default App;
