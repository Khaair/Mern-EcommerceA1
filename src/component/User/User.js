import React from 'react'
import Buy from './Buy'
import { Route, Routes } from "react-router-dom";

import Navbar from './Navbar'
import Profile from './Profile'
import Home from './Home';


function User() {
  return (
    <div>
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/buy" element={<Buy/>} />
        <Route  path="/profile" element={<Profile />} />
       </Routes> 
    </div>
  )
}


export default User