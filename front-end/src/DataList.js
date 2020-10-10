import React, { useState, useEffect } from "react";
import axios from "axios";

import Style from "./CSS/style.css";

const DataList = () => {
  const [list, setList] = useState([]);

  // without useEffect  method it render without load
  axios.get("/api/GetProduct").then((res) => setList(res.data));
  //  response.data is way to get base objects data
  // setList(response.data);

  return (
    <div>
      {list.map((x) => (
        <div className="mylist" key={x.id}>
          <ul className="list-group">
            <li className="list-group-item">
              {/* get ocjects data by list of objects in base data */}
              {x.userName}
              <br />
              {x.email}
              <span className="float-right font-weight-bold">x</span>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DataList;
