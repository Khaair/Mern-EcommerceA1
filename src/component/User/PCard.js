import React from 'react'
import './PCard.css'

function PCard(props) {
  return (
    <div> 
      <div>
    <div className="cardd">
            <img className='imagee' src="img/p1.jpg" alt="Denim Jeans" />
            <h5>SKU NUMBER: {props.number} </h5>
            <p className="price">{props.titleText}</p>
            <p>Quantity: {props.descText} </p>
            <p><button>Add to Cart</button></p>
          </div>
          </div>
    </div>
  )
}

export default PCard