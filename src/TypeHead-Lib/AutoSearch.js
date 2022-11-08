import axios from "axios";
import React, { useEffect, useState } from "react";
// import { ReactDOM } from "react-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import DATA from "./dummyData";
console.log("aaaa", DATA);

const AutoSearch = () => {
  const [Search1, setSearch1] = useState([]);
  const [Search, setSearch] = useState([]);
  // const [Twoapi, setTwoapi] = useState([]);

  const getData = async () => {
    // await fetch("https://jsonplaceholder.typicode.com/comments")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     let ArrData = [];
    //     res.map((item, index) => {
    //       item.label = item.name;
    //       // item.location = "India";
    //       // debugger;
    //     });
    //     ArrData = res;
    //     debugger

    //     setSearch(ArrData);
    //   });

    let res = await axios.get("https://jsonplaceholder.typicode.com/comments");
    let ArrData = [];
    let ArrData2 = [];
    debugger;
    let x = res.data?.map((val, idx) => {
      let status = false;
      let y = DATA?.map((subVal, subIdx) => {
        if (subIdx === idx && !status) {
          status = true;
          ArrData2.push({ ...val, location: subVal.label });
        }
      });
      !status && ArrData2.push({ ...val });
    });

    for (let item of ArrData2) {
      item.location && ArrData.push(item.location);
    }
    setSearch(ArrData);

    // getData2();
  };

  // const getData2 = () => {
  //   console.log("Searchzsdfzxdfcd", Search);
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       let userData = [];

  //       Search.map((item, index) => {
  //         if (index < 10) {
  //           res.map((item1, index1) => {
  //             if (index == index1) {
  //               Search[index].label = res[index1]?.address?.city;
  //             }
  //             // debugger;
  //           });
  //         }
  //       });
  //       setSearch(Search);
  //       // userData = Search;
  //       console.log("Search after", Search);
  //       setTwoapi(userData);
  //     });
  // };

  useEffect(() => {
    getData();
    // getData2();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <h1>Search Dummy Data</h1>
        <Typeahead
          className="SearchBox mt-3 "
          id="basic-example"
          onChange={setSearch1}
          options={Search}
          placeholder="Search a dummy Data"
          selected={Search1}
        />

        {/* <Typeahead
          className="SearchBox mt-3 "
          id="basic-example"
          onChange={setTwoapi}
          options={Search}
          placeholder="Search a dummy Data"
          selected={Twoapi}
        /> */}
      </div>
    </>
  );
};
export default AutoSearch;
