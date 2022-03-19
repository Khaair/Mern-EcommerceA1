import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <ul className='navv'>
                
           <li> <Link className='lnk' to="/">Home</Link> </li>
           <li> <Link className='lnk' to="/profile">Profile</Link> </li>
           <li> <Link className='lnk' to="/buy">Buy</Link> </li>
          
              
            </ul>

        </div>
    )
}

export default Navbar
