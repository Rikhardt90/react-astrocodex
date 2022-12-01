import React from "react";
import Gallery from "../../components/Gallery";
import "../../styles/Search.scss";

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" />
        <button className="submit">OK</button>
      </div>
      <div className="container">
        
        <Gallery/>

      </div>
    </div>
  );
};

export default Search;
