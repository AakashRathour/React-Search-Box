import React, { useState } from "react";
// import { ListData } from "../Data/ListData";
import { Form, Button } from "react-bootstrap";

const FillterTable = () => {
  //   const [Data, FetchData] = useState();
  //   const getData =()=>{
  //     fetch("")
  //   }
  return (
    <>
      <div className="container">
        <div className="Add-btn d-flex justify-content-end mb-5">
          <div className="d-flex justify-content-between mb-4">
            <h4>Employees Data</h4>
            <div className="d-flex">
              <Form.Select aria-label="Default select example">
                <option>Select Department</option>
                <option value="frontEnd">Front End</option>
                <option value="backEnd">Back End</option>
              </Form.Select>
              <Button variant="primary">Search</Button>
              <Button variant="primary">Reset</Button>
            </div>
          </div>
        </div>
        <table className="table table-bordered">
          <thead className="thead-dark text-center">
            <tr>
              <th scope="col">Employees ID</th>
              <th scope="col">Employees Name</th>
              <th scope="col">Employees Department</th>
              <th scope="col">Employees Code</th>
              <th scope="col">Employees Location</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <th scope="col">Employees ID</th>
              <th scope="col">Employees Name</th>
              <th scope="col">Employees Department</th>
              <th scope="col">Employees Code</th>
              <th scope="col">Employees Location</th>
            </tr>
            <tr>
              <td colSpan={4}>
                <h4>Data Note Found...</h4>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default FillterTable;
