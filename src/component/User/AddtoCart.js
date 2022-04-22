import React from 'react';
import './AddtoCart.css';
import { Link } from "react-router-dom";

export default function AddtoCart() {




    return (
        <>
            <div>
                <div className="div1">
                    <div className="Addcontainer">
                        <div className='titlee'>
                            <h2>My Cart</h2>
                            <Link to="/"><button className='addbtnn'>Continue Shoping</button></Link>
                        </div>
                        <div className='uu'>
                            <div className='uuone'>

                                <div className='addtocartone'>
                                    <img className='addtocartimg' src='img/p1.jpg' alt='loo' />
                                    <div className='adddetails'>
                                        <h3>Title</h3>
                                        <p>Since then, CPM has evolved as </p>
                                    </div>

                                </div>
                            </div>
                            <div className='uutwo'>
                            
                                <div className='uubtn'>
                                    <p>700*</p>
                                    
                                <button>-</button>
                               
                                 <p>0</p>
                                 <button>+</button>
                                 <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red',marginLeft: '10px'}} />

                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='uu'>
                            <div className='uuone'>

                                <div className='addtocartone'>
                                    <img className='addtocartimg' src='img/p1.jpg' alt='loo' />
                                    <div className='adddetails'>
                                        <h3>Title</h3>
                                        <p>Since then, CPM has evolved as </p>
                                    </div>

                                </div>
                            </div>
                            <div className='uutwo'>
                            
                                <div className='uubtn'>
                                    <p>700*</p>
                                    
                                <button>-</button>
                               
                                 <p>0</p>
                                 <button>+</button>
                                 <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red',marginLeft: '10px'}} />

                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div>
                            <input className="text" type="text" name placeholder="Cupon Code" />
                            <div className='llk'>
                                <button className='cuponbtn' >Submit</button>
                                <Link to="/checkout"><button className='checkoutbtnn'>Check Out</button></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='div2'>
                    <h4>hiii</h4>
                </div>


            </div>

        </>
    )
}
