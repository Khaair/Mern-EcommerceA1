import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'


function Navbar() {
  return (

    <>
      <div className='navcontainer'>


        <ul className='navv'>

          <div className='logo'>

           <Link className='logolink' to="/"><h3 >BD <span className='logospan'>ECom</span></h3></Link> 
          </div>

          <div className='searchh'>

            <input className='inp' placeholder="Search Here" />
            <button className='inpsearch' ><i class="fa fa-search" aria-hidden="true"></i>
            </button>

          </div>

          <li> <Link className='lnk' to="/">Home</Link> </li>


          <li> <Link className='lnk' to="/about">About</Link> </li>
          <li> <Link className='lnk' to="/contact">Contact</Link> </li>


          <li> <Link className='lnk' to="/addtocart"><img style={{ height: '40px' }} src='img/addtocart.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/wishlist"><img style={{ height: '40px' }} src='img/wishlistt.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/profile"><img style={{ height: '30px' }} src='img/proo.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/admin"><img style={{ height: '35px' }} src='img/Admin.png' alt='kii' /></Link> </li>

          {/* <li>
                <NavDropdown
                id="nav-dropdown-dark-example"
                title="Dropdown"
                menuVariant="dark"
                className='zzz'
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
                </li> */}







        </ul>

      </div>
    </>
  )
}

export default Navbar
