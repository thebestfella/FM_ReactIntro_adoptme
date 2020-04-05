import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";

//like a stamp, has to be used in order to create effect
const App = () => {
  return (
    <div>
      <h1 id="something important">Adopt me!</h1>
      <SearchParams></SearchParams>
    </div>
  );
};

//stamp app
render(
  // called 3rd composite component
  //React.createElement(App), document.getElementById("root")
  <App />,
  document.getElementById("root")
);
