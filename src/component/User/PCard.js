import React from 'react'
import './PCard.css'

function PCard() {
  return (
    <div>
    <div className="card">
            <img className='imagee' src="img/p1.jpg" alt="Denim Jeans" />
            <h3>Tailored Jeans</h3>
            <p className="price">$19.99</p>
            <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum.</p>
            <p><button>Add to Cart</button></p>
          </div>
    </div>
  )
}

export default PCard