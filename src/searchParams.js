import React from "react";

const SearchParams = () => {
  const location = "Seattle WA";

  return (
    <div className="search-params">
      <form>
        <lable htmlFor="location">
          Location
          <input id="location" value={location} placeholder="location"></input>
        </lable>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
