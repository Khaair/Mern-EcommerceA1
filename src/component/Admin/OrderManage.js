import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./OrderManage.css";

export default function OrderManage() {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/getuserorder`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          auth: localStorage.getItem("auth"),
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data, "order tracking");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="orcontainerss">
        <h2>Order</h2>
        <table>
          <tbody>
            <tr>
              <th>SL</th>
              <th>Order ID</th>
              <th>Status</th>
              <th>Date/Time</th>
              <th>Action</th>
            </tr>
            {data.map((el, ind) => {
              return (
                <tr key={ind}>
                  <td scope="row">{ind + 1}</td>
                  <td>{el.orderid}</td>
                  <select class="custom-select">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <td>{el.createdAt}</td>

                  <td>
                    <Link to={`/editorder/${el.orderid}`}>
                      
                      <td>
                        <button>Edit</button>
                      </td>
                    </Link>

                    <i
                      className="fa fa-trash-o"
                      style={{ fontSize: "30px", color: "red" }}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
