import React from 'react'
import Buy from './Buy'
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar'
import Profile from './Profile'
import Home from './Home';
import About from './About';
import Contact from './Contact';


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
       </Routes> 
    </div>
  )
}


export default User