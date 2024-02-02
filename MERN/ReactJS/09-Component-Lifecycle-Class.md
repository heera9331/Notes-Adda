# React Component Lifecycle

React lifecycle of components include initialization, mouting, rendering, updating and unmounting.

## Mounting Phase:

`constructor()`

`Use`: Initializing state and binding event handlers. It is called before the component is mounted.

`static getDerivedStateFromProps(props, state)`

`Use`: Rarely used, but can be used to update the state based on changes in props.

`render()`

`Use`: Required method. It returns the JSX that will be rendered to the DOM.

`componentDidMount()`

`Use`: Invoked immediately after a component is mounted. Useful for making network requests or interacting with the DOM.

```jsx
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

    return { count: props.count };
  }

  // 4.
  componentDidMount() {
    console.log("inside componentDidMount");
  }

  // 3.
  render() {
    console.log("inside render");
    return (
      <div>
        <p>Value {this.state.count}</p>
      </div>
    );
  }
}
```

## Updating Phase

`shouldComponentUpdate(nextProps, nextState)`

`Use`: Optimizing performance by preventing unnecessary renders. It returns a boolean indicating whether the component should re-render.

`render()`

`Use`: Same as in the mounting phase, it returns the updated JSX.

`getSnapshotBeforeUpdate(prevProps, prevState)`

`Use`: Capturing information from the DOM before it potentially changes. Rarely used.

`componentDidUpdate(prevProps, prevState, snapshot)`

`Use`: Invoked immediately after the component's updates are flushed to the DOM. Useful for performing side effects after a component updates.

```jsx
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
```

## Unmounting Phase:

`componentWillUnmount()`

`Use`: Invoked immediately before a component is unmounted and destroyed. Useful for cleanup, such as cancelling network requests or clearing up subscriptions.

```jsx
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
      <Header title="header" />
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
```

## Error Handling:

`static getDerivedStateFromError(error)`

`Use`: Used in error boundaries to update state in response to an error.
componentDidCatch(error, info)

`Use`: Used in error boundaries to log error information or perform other actions.

```jsx
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state to show the error message
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, info) {
    // Log the error information or perform other actions
    console.error("Error caught by error boundary:", error);
    console.error("Error boundary component stack trace:", info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error && this.state.error.toString()}</p>
        </div>
      );
    }

    // If no error, render the children
    return this.props.children;
  }
}

class MyComponent extends React.Component {
  render() {
    // Simulate an error in the component
    if (Math.random() > 0.5) {
      throw new Error("Random error occurred!");
    }

    return (
      <div>
        {/* Normal component rendering */}
        <h1>Hello from MyComponent!</h1>
      </div>
    );
  }
}

function App() {
  const [click, setClick] = useState(false);
  return (
    <ErrorBoundary>
      <MyComponent />
    </ErrorBoundary>
  );
}

export default App;
```

## Another example (Not recommanded)

```jsx
class Counter extends Component {
  /**
   * 1. Mounting phase
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
   *
   * This phase involves placing the component on the DOM (mounting it into the browser).
   * after then render of dom, the last method componentDidMount will call
   * use: api calls, async event listner
   *
   * note: invoked once and immediately after React inserts the component
   * into the Dom
   *
   */

  componentDidMount() {
    console.log("inside componentDidMount");
    // api call -> fakeapi
  }

  /**
   * 3. Updating phase
   *
   * desc: This phase occurs when the component is re-rendered due to changes in state or props.
   */

  /***
   * Allows optimization by deciding whether the component should re-render.
   * */

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

  /**
   * 4. Unmounting
   * desc: This phase occurs when a component is being removed from the DOM.
   */

  /**
   * Invoked just before the component is unmounted and destroyed.
   */
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
