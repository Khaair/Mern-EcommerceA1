import React from 'react'
import Buy from './Buy'
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar'
import Profile from './Profile'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Single from './Single';
import Wishlist from './Wishlist';
import Register from './Register';
import AddtoCart from './AddtoCart';




function User() {
  return (
    <div>
     
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route  path="/profile" element={<Profile />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />

        <Route  path="/single" element={<Single />} />
        <Route  path="/wishlist" element={<Wishlist />} />

        <Route  path="/register" element={<Register />} />
        <Route  path="/addtocart" element={<AddtoCart />} />
       </Routes> 
     
    </div>
  )
}


export default User