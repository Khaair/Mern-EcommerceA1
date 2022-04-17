import React from 'react'
import './PCard.css'
import axios from "axios";
import {useSelector,useDispatch} from 'react-redux'
import {addtoCart,decrement} from '../Services/Actions/AddtoCartAction'

function PCard(props) {


  const count = useSelector( state => state.CounterReducer.count)
  const dispatch = useDispatch()


  return (
    
    <div className="col-sm-4">
                  <div className="card cardd">
                    <div className="card-body">
                      <h5 className="card-title">SKU NUMBER: {props.skunumber}</h5>
                      <p className="card-text">{props.price}</p>
                      
                      <button  onClick={() => dispatch(addtoCart(props.idd,"add"))} className="default-btn">Add to Cart</button>

                    </div>
                  </div>
                </div>

  )
}

export default PCard




