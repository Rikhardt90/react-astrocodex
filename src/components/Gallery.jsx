import axios from "axios";
import React, { useState, useEffect } from "react";
//import "../../styles/Gallery.scss"
import Pagination from "./Pagination";
import Card from "./Card";

const Gallery = () => {

  const [Bodies, setBodies] = useState([]);
  const URL = "https://data.opendatasoft.com//api/records/1.0/search/?dataset=ngc-ic-messier-catalog%40datastro&q=&start=";

  const getBodies = async (newPage = 1) => {
    const res = await axios(URL + newPage)
    setBodies(res.data.records);
}

  useEffect(() => {
    getBodies();
  }, []);

  console.log(Bodies);

  return (
    <div className="gallery">
      //<Card bodies={Bodies} />
      <Pagination getData={getBodies} />
    </div>
  );
};

export default Gallery;
