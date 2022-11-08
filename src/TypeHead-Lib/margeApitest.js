import React from "react";
import { useState,useEffect } from "react";


const TestingAPi = () => {
  const [loading, setLoading] = useState(false);
  const [dataOne, setDataOne] = useState  ([]);
  const [dataTwo, setDataTwo] = useState ([]);
//   const dem o=setDataOne.concat(setDataTwo);
//   console.log(setMarge);

  const getDataOne = async () => {
    setLoading(true);
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const jsonResult = await result.json();
    console.log("Api",jsonResult);

    setLoading(false);
    setDataOne(jsonResult);
  };

  const getDataTwo = async () => {
    setLoading(true);
    const result = await fetch("https://jsonplaceholder.typicode.com/albums");
    const jsonResult = await result.json();
    console.log("Api2",jsonResult);

    setLoading(false);
    setDataTwo(jsonResult);
  };

  useEffect(() => {
    getDataOne();
    getDataTwo();
  }, []);
  return (
    <>
      <h1>Test Marge Api</h1>
    </>
  );
};

export default TestingAPi;
