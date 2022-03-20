import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
    return (
        <div className='navcontainer'>
            
        
            <ul className='navv'>
           

                <li> <Link className='lnk' to="/">Home</Link> </li>
                <li> <Link className='lnk' to="/profile">Profile</Link> </li>
                <li> <Link className='lnk' to="/buy">Buy</Link> </li>
                <li> <Link className='lnk' to="/buy">About</Link> </li>
                <li> <Link className='lnk' to="/buy">Contact</Link> </li>
                <li> <Link className='lnk' to="/buy">Cloth</Link> </li>
                <li> <Link className='lnk' to="/buy">Buy</Link> </li>


            </ul>

        </div>
    )
}

export default Navbar
