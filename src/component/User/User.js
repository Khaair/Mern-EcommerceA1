import React from 'react'

import { Route, Routes } from "react-router-dom";
import Buy from '../Buy'
import Home from '../Home'
import Navbar from '../Navbar'
import Profile from '../Profile'

 function User() {
  return (
    <div>
         <Navbar/>
        <h2>User</h2>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Buy" element={<Buy />} />
        </Routes>

       
    </div>
  )
}


export default User