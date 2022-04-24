import React, { useState,useEffect } from 'react'
import Buy from './Buy'
import { Route, Routes } from "react-router-dom";
import axios from "axios";


import Navbar from './Navbar'
import Profile from './Profile'
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Single from './Single';
import Wishlist from './Wishlist';
import Register from './Register';
import AddtoCart from './AddtoCart';
import Checkout from './Checkout';
import Payment from './Payment';
import Order from './Order';
import OrderTracking from './OrderTracking';
import UserProfile from './UserProfile';
import Login from './Login';


function User() {
  const [cdata, setC] = useState([]);
  const [ddata, setD] = useState([]);

  console.log(ddata,'yeaaaap')

  

  useEffect(async() => {
  try {

    await axios.get(`http://localhost:5000/api/users/profile`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('auth')
      }
    }).then(async (data2)=>{
     
  
      // console.log(data2.data[0].cart,"yeap")
  
      if(data2){
        setC(data2.data[0].cart)
        
      }
  
      // console.log(data2, 'profile asche')
  
  
  
  
    }).catch(err => {
      this.setState({ mesg: err.response.data.message, loding: false })
      this.notify();
      console.log(err)
    })
   
  }
  catch(err) {

    console.log(err)
    
  }

  },[]);



  let arr = []
  for (var key in cdata) {
   var obj = cdata[key].quantity;
   arr.push(obj)
   
}
const sum = arr.reduce((a, b) => a + b, 0);


    






  

  const cartSet = (data) => {
    setC(data)

   

  }

  // console.log(cdata, "zooooo")

  let ff = [...cdata]

  let cartId = ff.map(e => e.id )
  
  // console.log(cartId, "here")


  useEffect(async() => {
    if (cartId.length) {
    await axios.get(`http://localhost:5000/api/product/products_by_id?id=${cartId}&type=array`)
      .then(response => {
        console.log(response,"response")
        setD(response.data)



        //Make CartDetail inside Redux Store 
        // We need to add quantity data to Product Information that come from Product Collection. 
        let totalproduct = 0;
        let price = 0;

        console.log(response.data,"oiiiii")

        // response.data[0].cart.forEach(cartItem => {
        //   response.data.forEach((productDetail, i) => {
        //     if (cartItem.id === productDetail._id) {
        //       response.data[i].quantity = cartItem.quantity;
        //       totalproduct += parseInt(cartItem.quantity)
        //       price += parseInt(productDetail.price) * parseInt(cartItem.quantity)

        //       console.log(price,"price")

        //     }
        //   })
        // })
        // this.setState({ addtocart: totalproduct, cart: response.data, totalprice: price })

        console.log(totalproduct)
      }).catch(err => {
        // this.componentDidMount()
        console.log(err)
        // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
      })

  } else {
    // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
  }


  }, []);
  




  



  return (
    <div>
{/* {JSON.stringify(cdata)} */}
      <Navbar cdata={sum} />
      <Routes>
        <Route path="*" element={<Home cartSet={cartSet}  />} />
        
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/single" element={<Single />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/register" element={<Register />} />
        <Route path="/addtocart" element={<AddtoCart  ddata= {ddata} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order" element={<Order />} />
        <Route path="/ordertracking" element={<OrderTracking />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />

      </Routes>


    </div>
  )
}


export default User