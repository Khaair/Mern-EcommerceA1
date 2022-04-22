import React from 'react'
import './PCard.css'
import axios from "axios";

function PCard(props) {

  const addC=async (a)=>{
    if(localStorage.getItem('auth')){
      let data= await axios.get(`http://localhost:5000/api/users/addToCart/?type=add&productId=${a}` ,{
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              
          }

         
      }).then(response => {

        props.cartSet(response.data)
        
        console.log(response.data.length,"haha");

    })
      
    
    }
 
  }

  return (
    
    <div className="col-sm-4">
                  <div className="card cardd">
                    <div className="card-body">
                      <h5 className="card-title">SKU NUMBER: {props.skunumber}</h5>
                      <p className="card-text">{props.price}</p>
                      
                      <button  onClick={() => addC(props.idd)} className="default-btn">Add to Cart</button>

                    </div>
                  </div>
                </div>

  )
}

export default PCard




