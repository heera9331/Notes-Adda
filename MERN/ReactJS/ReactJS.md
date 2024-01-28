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

## 9. Class component

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

## 10. React hooks

React Hooks are functions that allow you to use state and lifecycle features in functional components

- Only Call Hooks at the Top Level
- Call Hooks in the Same Order
- Only Call Hooks from React Component
- Create Custom Hooks with the "use" Prefix
