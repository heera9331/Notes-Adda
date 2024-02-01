/* eslint-disable no-unused-vars */
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";
import React, { Component, useState } from "react";

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
