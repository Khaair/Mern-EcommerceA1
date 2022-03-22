import React from 'react'
import './AddtoCart.css'
import { Link } from "react-router-dom";

export default function AddtoCart() {
    return (
        <div>

            <div className="div1">

                <div className="wcontainer">
                    <div className='titlee'>
                        <h2>My Cart</h2>
                    </div>
                    <div className="profileContainer">

                        <div className="pone">
                            <img className='imgg' src='img/laptopp.jpg' alt='hhh' />
                        </div>
                        <div className="ptwo">
                            <h3>Product Name: Product 01</h3>
                            <h6 >Discover 159 free Registered Logo png images with transparent backgrounds.
                                Search more hd transparent Registered Logo image on KindPNG.
                                Search more hd transparent Registered Logo image on KindPNG.
                            </h6>
                        </div>
                    </div>

                    <hr></hr>

                    <div className="profileContainer">

                        <div className="pone">
                            <img className='imgg' src='img/laptopp.jpg' alt='hhh' />
                        </div>
                        <div className="ptwo">
                            <h3>Product Name: Product 01</h3>
                            <h6 >Discover 159 free Registered Logo png images with transparent backgrounds.
                                Search more hd transparent Registered Logo image on KindPNG.
                                Search more hd transparent Registered Logo image on KindPNG.
                            </h6>
                        </div>
                    </div>
                    <hr></hr>
                    <div>
                    <input className="text" type="text" name placeholder="Cupon Code" />
                    
                       <div className='llk'>
                       <button  className='cuponbtn' >Submit</button> 
                        <Link to="/checkout"><button className='checkoutbtn'>Check Out</button></Link> 
                       </div>

                    </div>
                    

                </div>
            </div>
        </div>
    )
}
