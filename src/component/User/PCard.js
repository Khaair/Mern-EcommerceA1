import React from 'react'
import './PCard.css'
import axios from "axios";

function PCard(props) {



  return (

    <div className="col-sm-3">
      <div className="card cardd">
        <div className="card-body">
          <div className='pcardmaincon'>
            <img style={{ height: '150px', width: "255px" }} src='img/laptopp.jpg' alt='loo' />

            <div className='pcardmainchild'>
              <img onClick={() => props.addTowishlist(props.item._id, "add")} style={{ height: '50px', cursor: "pointer" }} src='img/wishlistt.png' alt='kii' />

            </div>
          </div>

          <h5 className="card-title">Title: {props.item.title}</h5>
          <p className="card-text">Price: {props.item.price}</p>
          <p className="card-text">Brand: {props.item.brand}</p>




          <button onClick={() => props.addToCarthandler(props.item._id, "add")} className="default-btn">Add to Cart</button>

        </div>
      </div>
    </div>

  )
}

export default PCard




