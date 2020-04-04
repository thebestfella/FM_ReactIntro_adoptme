import React from "react";
//your code is going to go here

//default function change from "const Pet = ({name, animal, breed})
export default function Pet({ name, animal, breed }) {
  //(prop) destructuring
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, name),
  //   React.createElement("h2", {}, animal),
  //   React.createElement("h2", {}, breed),
  // ]);

  //will be trsnslated to top structure
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
