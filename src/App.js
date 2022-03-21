import './App.css';
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Admin from './component/Admin/Admin';
import User from './component/User/User';
import Profile from './component/User/Profile';
import Buy from './component/User/Profile';
import Home from './component/User/Home';
import About from './component/User/About';
import Contact from './component/User/Contact';
import Single from './component/User/Single';
import Wishlist from './component/User/Wishlist';
import Register from './component/User/Register';
import AddtoCart from './component/User/AddtoCart';




function App() {
  return (
    
    <BrowserRouter>
    
       <Routes>
       <Route exact path="/" element={<User/>}>
       <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="buy" element={<Buy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="single" element={<Single />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="register" element={<Register />} />
          <Route path="addtocart" element={<AddtoCart />} />
       </Route>
        <Route exact path="/admin" element={<Admin />} />
     </Routes>
   

    </BrowserRouter>
  );
}

export default App;
