import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

//like a stamp, has to be used in order to create effect
const App = () => {
  // comment out the original js, using jxs now
  // return React.createElement(
  //   //called 1st here
  //   "div",
  //   { id: "some id" }, //attribute you want to add
  //   [
  //     React.createElement("h1", {}, "adopt me!"), //called 2nd here
  //     React.createElement(Pet, {
  //       name: "luna",
  //       animal: "dog",
  //       breed: "havanese",
  //     }),
  //     React.createElement(Pet, {
  //       name: "pepper",
  //       animal: "bird",
  //       breed: "cockatiel",
  //     }),
  //     React.createElement(Pet, {
  //       name: "doink",
  //       animal: "cat",
  //       breed: "mixed",
  //     }),
  //   ]
  // );

  return (
    <div>
      <h1 id="something important">Adopt me!</h1>
      <Pet name="luna" animal="dog" breed="havanese" />
      <Pet name="pepper" animal="bird" breed="cockatiel" />
      <Pet name="doink" animal="cat" breed="mixed" />
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
