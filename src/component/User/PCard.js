import React from 'react'
import './PCard.css'
import axios from "axios";

function PCard(props) {



  // const addC=async (a)=>{
  //   if(localStorage.getItem('auth')){
  //     let data= await axios.get(`http://localhost:5000/api/users/addToCart/?type=add&productId=${a}` ,{
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'

  //         }


  //     }).then(response => {

  //       props.cartSet(response.data)

  //       console.log(response.data.length,"haha");

  //   })


  //   }

  // }

  return (

    <div className="col-sm-4">
      <div className="card cardd">
        <div className="card-body">
          <div className='pcardmaincon'>
            <img style={{ height: '150px', width: "100%" }} src='img/laptopp.jpg' alt='loo' />

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




