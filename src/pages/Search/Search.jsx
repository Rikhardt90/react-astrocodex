import React, { useState, useEffect } from "react";
import "../../styles/Search.scss";
import axios from "axios";
//import "../../styles/Gallery.scss"
import Pagination from "../../components/Pagination";
import Card from "../../components/Card";

const Search = () => {

  const [Bodies, setBodies] = useState([]);
  const URL ="https://data.opendatasoft.com//api/records/1.0/search/?dataset=ngc-ic-messier-catalog%40datastro&rows=20&start=";

  const getBodies = async (newPage = 0) => {
    const res = await axios(URL + newPage);
    setBodies(res.data.records);
  };

  useEffect(() => {
    getBodies();
  }, []);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" />
        <button className="submit">search</button>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          <Card bodies={Bodies} />
          <Pagination getData={getBodies} />
        </div>
      </div>
    </div>
  );
};

export default Search;
