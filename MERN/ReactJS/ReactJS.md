# ReactJS - 2024

![ReactJS](./imgs/reactjs.png)

## 1. What is ReactJS?

- The library for web and native user interfaces
- React is a JavaScript library for building user interfaces.
- React is used to build single-page applications.
- React is an open-source JavaScript library for building user interfaces. It's maintained by Facebook and a community of developers.
- React version - 18.2.0

## NodeJS Installation

- nodejs is a javascript runtime, what run the javascript code without using a browswer.
- nodejs developed by - google
- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- Firefox - Spider Monkey JS Engine
- Edge - Chakra JS Engine

> Download NodeJS - https://nodejs.org/en/download/current

## Let's Create React App

- cmd command - `npx create-react-app appname`
- move to app folder `cd appname`
- start the app `npm start`

> `npx` - is stands for node package execute, help us to execute node package with installation

> `create-react-app` is a command line tool that help use to create a react app

## JSX (Javascript Syntax Extension)

JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe the structure of UI components. It looks similar to HTML but gets transpiled into JavaScript.

> It allows you to write javascript with html.

## 2. Component

Component is a reusable peace of code that is used to build react app.

> Components are the building blocks of a React application. They are reusable, self-contained pieces of the user interface that can be composed to build complex UIs.

### Functional Component

Functional components are simple JavaScript functions that accept props and return JSX. Class components are JavaScript classes that extend React.Component and have a render method.

```jsx
function Comp() {
  return <h1>This is heading</h1>;
}
```

### Styling the component

### CSS Modules .module.css

### State

State is an object that represents the data a component needs to render. Unlike props, state is mutable and is used for managing component-specific data.

> State is a mutable object.

### 3. Props

Props stands for properties, It is an object that is share data between components.

> Props are immutable object.

## 4. React Event

Events are any actions on a page, like click, scroll, mouse move, hover, drag etc.

```jsx
function Input() {
  function handleClick() {
    console.log("clicked");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

### Getting Values

## 5. React Conditional Rendering

- if Statement

```jsx

```

- && Operator

```jsx

```

- Ternary operator

```jsx

```

## 6. React Lists

- `map()` allows you to render list of components
- `key` is a unique number assigned to each sibling, But they can be duplicated globally.

## 7. React Forms

```jsx

function Login() {
  const [user, setUser] = useState({username: "", password: ""});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <form action="#" onSubmit={(e)=>{handleSubmit(e)}}>
      <h2>Login Form</h2>

      <div>
        <label for="username">Username</label>
        <input type="text" value={user.username} onChange={(e)=>{setUser({...user, username: e.target.value})}}>
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" value={user.password} onChange={(e)=>{setUser({...user, password: e.target.value})}}>
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
}

```

## 8. Class component

Class components are a type of component that was prevalent before the introduction of hooks in React 16.8. Class components use ES6 class syntax and extend the React.Component class to create a component with state and lifecycle methods.

- The constructor method is used to initialize the component's state.
- The handleClick method is an event handler that updates the state when a button is clicked.
- The render method is where the component's UI is defined.

```jsx
import React, { Component } from "react";

class MyClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default MyClassComponent;
```

- The constructor method is used to initialize the component's state.
- The handleClick method is an event handler that updates the state when a button is clicked.
- The render method is where the component's UI is defined.

Class components also have lifecycle methods, such as componentDidMount, componentDidUpdate, and componentWillUnmount, which can be used for handling side effects, fetching data, or cleaning up resources.

## React Component Lifecycle

React lifecycle of components include initialization, mouting, rendering, updating and unmounting.

```jsx
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
```

`shouldComponentUpdate`

```jsx
class Counter1 extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // yes component should update
    if (this.props.value !== nextProps.value) {
      return true;
    }
    // no component should not update
    return false;
  }

  render() {
    console.log("counter1");
    return (
      <div>
        <p>Counter 1</p>
        <p>value {this.props.value}</p>
        <button
          onClick={() => {
            this.props.incrementCounter1();
          }}
        >
          click
        </button>
      </div>
    );
  }
}

class Counter2 extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.value !== nextProps.value) {
      return true;
    }
    return false;
  }

  render() {
    console.log("counter2");
    return (
      <div>
        <p>Counter 2</p>
        <p>value {this.props.value}</p>
        <button
          onClick={() => {
            this.props.incrementCounter2();
          }}
        >
          click
        </button>
      </div>
    );
  }
}

function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  function incrementCounter1() {
    setCounter1(counter1 + 1);
  }
  function incrementCounter2() {
    setCounter2(counter2 + 1);
  }
  return (
    <div>
      <Counter1 value={counter1} incrementCounter1={incrementCounter1} />
      <Counter2 value={counter2} incrementCounter2={incrementCounter2} />
    </div>
  );
}
```

## 10. React hooks

React Hooks are functions that allow you to use state and lifecycle features in functional components

- Only Call Hooks at the Top Level
- Call Hooks in the Same Order
- Only Call Hooks from React Component
- Create Custom Hooks with the "use" Prefix
