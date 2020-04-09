import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";

//like a stamp, has to be used in order to create effect
const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <Link to="/">Adopt me!</Link>
        </header>
        <Router>
          <SearchParams path="/"></SearchParams>
          <Details path="/details/:id"></Details>
        </Router>
      </div>
    </React.StrictMode>
  );
};

//stamp app
render(
  // called 3rd composite component
  //React.createElement(App), document.getElementById("root")
  <App />,
  document.getElementById("root")
);
