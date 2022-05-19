import React from "react";
import { Link } from "react-router-dom";
import "./OrderTracking.css";

export default function OrderTracking(props) {
  return (
    <>
      <div className="otcontainer">
        <div className="otinnercontainer">
          <div className="otone">
            <h3>Estimated Delibary Time:</h3>
            <div className="otonenn">
              <p>Text</p>
              <p>Text</p>
            </div>
          </div>

          <div className="otone">
            <h3>Delibary Time:</h3>
            <div className="otonenn">
              <p>Text</p>
              <p>Text</p>
            </div>
          </div>

          <div className="otone">
            <h3>Status:</h3>
            <button>Pending</button>
          </div>
        </div>

        <hr></hr>

        <br></br>
        {props.cart.length &&
          props.cart.map((item, ind) => {
            // console.log(nddata,"mappp")
            return (
       
              <div className="uu" key={ind}>
                  
                <div className="otoutercon">
                  <div className="otouterone">
                    <div className="otouteroneimgdiv">
                  
                      <img
                        className="otouteroneimg"
                        src="img/p1.jpg"
                        alt="ff"
                      />
                  
                    </div>
                    <div className="llg">
                      <h3>Title: {item.title}</h3>

                      <p>Price: {item.price}</p>
                    </div>
                  </div>
                  <br></br>

                 
                </div>
              </div>
            );
          })}

        <hr className="hrr"></hr>

        <h3>Total Price: {props.totalprice}</h3>
        <Link to="/order">
          <td>
            <button>Back</button>
          </td>
        </Link>
      </div>
    </>
  );
}
