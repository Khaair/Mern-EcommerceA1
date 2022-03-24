import React from 'react'
import './Wishlist.css'
import { Link } from "react-router-dom";


export default function Wishlist() {
    return (
        <div>

            <div className="div1">

                <div className="Addcontainer">
                    <div className='titlee'>
                        <h2>My Wish List</h2>
                        <Link to="/"><button className='wishbtnn'>Continue Shoping</button></Link>
                    </div>

                    <div className='addtocartone'>
                        <img className='addtocartimg' src='img/p1.jpg' alt='loo' />
                        <div className='adddetails'>
                            <h3>Title</h3>
                            <p>Since then, CPM has evolved as workplace practices and technologies have ... and forecasting data -- such as revenue, expenses and inventory reports.</p>
                        </div>

                    </div>


                    <hr></hr>


                    <div className='addtocartone'>
                        <img className='addtocartimg' src='img/p1.jpg' alt='loo' />
                        <div className='adddetails'>
                            <h3>Title</h3>
                            <p>Since then, CPM has evolved as workplace practices and technologies have ... and forecasting data -- such as revenue, expenses and inventory reports.</p>
                        </div>

                    </div>


                    <hr></hr>



                </div>
            </div>
        </div>
    )
}
