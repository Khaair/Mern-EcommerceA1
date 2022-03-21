import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <div className='navcontainer'>
            
        
            <ul className='navv'>
           

                <li> <Link className='lnk' to="/">Home</Link> </li>
               
                <li> <Link className='lnk' to="/buy">Buy</Link> </li>
                <li> <Link className='lnk' to="/about">About</Link> </li>
                <li> <Link className='lnk' to="/contact">Contact</Link> </li>
               
              
                <li> <Link className='lnk' to="/addtocart"><img style={{height: '30px'}} src='img/addtocart.png' alt='kii'/></Link> </li>
                <li> <Link className='lnk' to="/wishlist"><img style={{height: '30px'}} src='img/wish-list.png' alt='kii'/></Link> </li>
                <li> <Link className='lnk' to="/profile"><img style={{height: '30px'}} src='img/proo.png' alt='kii'/></Link> </li>
                <li> <Link className='lnk' to="/register"><img style={{height: '30px'}} src='img/regg.png' alt='kii'/></Link> </li>





            </ul>

        </div>
    )
}

export default Navbar
