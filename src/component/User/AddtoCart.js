import React from 'react'
import './AddtoCart.css'
import { Link } from "react-router-dom";

export default function AddtoCart() {
    return (
        <div>

            <div className="div1">

                <div className="Addcontainer">
                    <div className='titlee'>
                        <h2>My Cart</h2>
                       <Link to="/"><button className='addbtnn'>Continue Shoping</button></Link> 
                    </div>

                    <div className='addtocartone'>
                        <img className='addtocartimg' src='img/p1.jpg'alt='loo'/>
                        <div className='adddetails'>
                        <h3>Title</h3>
                        <p>Since then, CPM has evolved as workplace practices and technologies have ... and forecasting data -- such as revenue, expenses and inventory reports.</p>
                        </div>
                        
                    </div>
                  

                    <hr></hr>


                    <div className='addtocartone'>
                        <img className='addtocartimg' src='img/p1.jpg'alt='loo'/>
                        <div className='adddetails'>
                        <h3>Title</h3>
                        <p>Since then, CPM has evolved as workplace practices and technologies have ... and forecasting data -- such as revenue, expenses and inventory reports.</p>
                        </div>
                        
                    </div>

                  
                    <hr></hr>
                    <div>
                    <input className="text" type="text" name placeholder="Cupon Code" />
                    
                       <div className='llk'>
                       <button  className='cuponbtn' >Submit</button> 
                        <Link to="/checkout"><button className='checkoutbtnn'>Check Out</button></Link> 
                       </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}
