import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react-dom";
import { Typeahead } from "react-bootstrap-typeahead";
// import DATA from "./dummyData";

const AutoSearch = () => {
  const [Search1, setSearch1] = useState([]);
  const [Search, setSearch] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((res) => {
        let ArrData = [];
        res.map((item, index) => {
          item.label = item.name;
        });
        ArrData = res;
        setSearch(ArrData);
        // console.log("Test", ArrData);
      });

      
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="contanier">
        <h1>Search DATA</h1>
        <Typeahead
          className="SearchBox"
          id="basic-example"
          onChange={setSearch1}
          options={Search}
          placeholder="Choose a state..."
          selected={Search1}
        />
      </div>
    </>
  );
};
export default AutoSearch;
