import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import Checkout from './component/User/Checkout';
import Payment from './component/User/Payment';
import Order from './component/User/Order';
import OrderTracking from './component/User/OrderTracking';
import DeshBoard from './component/Admin/DeshBoard';
import AddProduct from './component/Admin/AddProduct';
import OrderManage from './component/Admin/OrderManage';
import ProductManage from './component/Admin/ProductManage';
import UserManage from './component/Admin/UserManage';
import EditUserProfile from './component/Admin/EditUserProfile';
import EditProduct from './component/Admin/EditProduct';
import EditOrder from './component/Admin/EditOrder';
import UserProfile from './component/User/UserProfile';
import Login from './component/User/Login';





function App() {
  return (

    <BrowserRouter>

      <Routes>
        
        <Route exact path="/" element={<User />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="buy" element={<Buy />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="single" element={<Single />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="register" element={<Register />} />
          <Route path="addtocart" element={<AddtoCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="payment" element={<Payment />} />
          <Route path="order" element={<Order />} />
          <Route path="ordertracking" element={<OrderTracking />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="login" element={<Login />} />


        </Route>
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/deshboard" element={<DeshBoard />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="ordermanage" element={<OrderManage />} />
        <Route path="productmanage" element={<ProductManage />} /> 
        <Route path="usermanage" element={<UserManage />} />
        <Route path="edituserprofile" element={<EditUserProfile />} />
        <Route path="editproduct" element={<EditProduct />} />
        <Route path="editorder" element={<EditOrder />} />





       
       
      </Routes>


    </BrowserRouter>
  );
}

export default App;
