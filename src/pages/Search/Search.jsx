import React, { useState, useEffect } from "react";
import "../../styles/Search.scss";
import axios from "axios";
//import "../../styles/Gallery.scss"
import Pagination from "../../components/Pagination";
import CardGallery from "../../components/CardGallery";
import { Card } from "../../models/Card";

const Search = () => {

  const elementsPerPage = 20
  const [Cards, setCards] = useState([]);
  const URL ="https://data.opendatasoft.com//api/records/1.0/search/?dataset=ngc-ic-messier-catalog%40datastro";

  const getCards = async (newPage = 0) => {
    const rowsUrlParameter = "&rows=" + elementsPerPage
    const startUrlParameter = "&start=" + newPage * elementsPerPage
    const res = await axios(URL + rowsUrlParameter + startUrlParameter);
    const cards = res.data.records.map(record => {
      const data = record.fields
      return new Card(
        record.recordid,
        data.name,
        data.hubble,
        data.object_definition,
        data.ra,
        data.dec
      )
    })
    setCards(cards);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="search-container">
      <div className="search-bar">
        <input type="text" />
        <button className="submit">search</button>
      </div>
      <div className="gallery-container">
        <div className="gallery">
          <CardGallery cards={Cards} />
          <Pagination getData={getCards} />
        </div>
      </div>
    </div>
  );
};

export default Search;
