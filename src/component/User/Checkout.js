import React, { useState } from "react";
import "./Checkout.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout(props) {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [savedata, setSavedata] = useState("");

  const objInfo = {
    fullname,
    email,
    address,
    city,
    state,
    zip,
  };

  console.log(objInfo, "orderobjinfo");

  const handleSubmit = () => {
    setSavedata(objInfo);
  };



  const variable = {
    address: savedata,
    orderid: Math.floor(Math.random() * 1000),
    paymentid: Math.floor(Math.random() * 1000),
    products: props.cart,
    total: props.totalprice,
  };

  console.log(variable, "variable");

  // consolenavigate = useNavigate();

  const sendDatatoApp = async (e) => {

    handleSubmit()
    
    let x;
    try {
      x = await axios.post(
        "http://localhost:5000/ordersave",
        variable,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            auth: localStorage.getItem("auth"),
          },
        }
      );

      console.log(x.data.success, "successss");
    } catch (er) {
      console.log(er);
    }

    e.preventDefault();


//  if (x) {
      
//       navigate('/order')

//     }
//     else {
    

//       navigate('/order')
//     }    
   



    
  };

  return (
    <div>
      <div className="div1">
        <div className="ccontainerss">
          <h2>Order post</h2>
          <hr></hr>
          <form>
            <label className="name">Full Name</label>
            <br />
            <input
              className="text"
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
            />
            <br />

            <label className="name">Email</label>
            <br />
            <input
              className="text"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <br />

            <label className="name">Address</label>
            <br />
            <input
              className="text"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Address"
            />
            <br />

            <label className="name">City</label>
            <br />
            <input
              className="text"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
            <br />
            <label className="name">State</label>
            <br />
            <input
              className="text"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />

            <br />
            <br />
            <label className="name">Zip</label>
            <br />
            <input
              className="text"
              type="text"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip"
            />

            <br />
         

        <button onClick={sendDatatoApp} className="checkoutbtn">
              Order
            </button> 

            < Link to="/order"><button className='checkoutbtnn'>order go</button></Link>

          </form>
        </div>
      </div>
    </div>
  );
}
