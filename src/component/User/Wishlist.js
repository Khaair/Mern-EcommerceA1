import React from 'react';
import './Wishlist.css';
import { Link } from "react-router-dom";

export default function Wishlist(props) {

  let nwish= [...props.wish]

  console.log(nwish,"profile")

   return (
        <>
            <div>
                <div className="div1">
                    <div className="Addcontainer">
                        <div className='titlee'>
                            <h2>My Cart</h2>
                            <Link to="/"><button className='addbtnn'>Continue Shoping</button></Link>
                        </div>

                        {nwish.map((item, ind) => {
                            console.log(nwish,"nprofile")
                            return (
                                <div className='uu'>
                                    <div className='uuone'>

                                        <div className='addtocartone'>
                                            <img className='addtocartimg' src='img/p1.jpg' alt='loo' />
                                            <div className='adddetails'>
                                                <h3>{item.title}</h3>
                                                <p>{item.brand}</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className='wishuutwo'>

                                        <div className='wishuubtn'>
                                            <p>{item.price}*</p>


                                            <button   type="button" onClick={() => props.addToCarthandler(item._id, "add")} >Add to Cart</button>

                                            <div>
                                                <button className="deletebtn" type="button" onClick={() => props.removeFromWish(item._id)} ><i className="fa fa-trash-o" style={{ fontSize: '30px', color: 'red', marginLeft: '10px' }} /></button>

                                            </div>


                                        </div>
                                    </div>
                                </div>

                            )
                        })}

                  
                    </div>
                </div>

                <div className='div2'>

                </div>


            </div>

        </>
    )
}
