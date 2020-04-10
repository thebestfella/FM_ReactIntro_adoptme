import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

//like a stamp, has to be used in order to create effect
const App = () => {
  const themeHook = useState(
    "magenta"
    //{buttonColor: "magenta",
    //modalColor: "peru",}
  );
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Router>
            <SearchParams path="/"></SearchParams>
            <Details path="/details/:id"></Details>
          </Router>
        </div>
      </ThemeContext.Provider>
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
