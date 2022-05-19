import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function EditOrder({data}) {
  
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

   console.log(`${id}`,"idd")

  useEffect(async () => {    
    let myData = await axios.get(`http://localhost:5000/getsingleorder?orderid=${id}`);
    console.log(myData,"mydata");
    // setTitle(myData.data.title);
    // setAuthor(myData.data.author);
    // setBody(myData.data.body);
  }, []);

  const upDate = async () => {
    try {
      let ad = await axios.post(`http://localhost:4000/api/update/${id}`, {
        title,
        author,
        body,
      });
      console.log(ad);
    } catch (er) {
      console.log(er);
    }
    navigate("/");
  };




  return (
    <div>
      <div className="div1">
        <div className="containerss">
          <h2>Edit Order</h2>
          <form>
            <label className="name">Order ID</label>
            <br />
            <input className="text" type="text" name placeholder="First Name" />
            <br />
            <label className="name">Status</label>
            <br />
            <input className="text" type="text" name placeholder="Last Name" />
            <br />
            <label className="name">Date/Time</label>
            <br />
            <input
              className="text"
              type="text"
              name
              placeholder="Father Name"
            />
            <br />
            <label className="name"> Invoices</label>
            <br />

            <input
              className="text"
              type="text"
              name
              placeholder="Father Name"
            />
            <br />

            <label className="name">Transaction</label>
            <br />

            <input
              className="text"
              type="text"
              name
              placeholder="Father Name"
            />
            <br />

            <label className="name"> Order Details</label>
            <br />

            <input
              className="text"
              type="text"
              name
              placeholder="Father Name"
            />
            <br />

            <button className="btn">UPDATE</button>
          </form>
        </div>
      </div>
    </div>
  );
}
