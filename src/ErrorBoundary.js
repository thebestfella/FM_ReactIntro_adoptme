//mostly code from the reactjs.org/docs/error-boundaries.html
import React from "react";
import { Link, Redirect } from "@reach/router";

//errorboundary catch errors of its children, therefore its imperative to
//wrap the item you want to track in the class

class ErrorBoundary extends React.Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  //run everytime when it gets update from props
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
      //setTimeout(()=>navigate('/'), 5000);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/"></Redirect>;
    }
    if (this.state.hasError) {
      return (
        <h1>
          there was an error with this listing.
          <Link to="/"> CLICK HERE </Link> to go back to the home page or wait 5
          seconds.
        </h1>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
