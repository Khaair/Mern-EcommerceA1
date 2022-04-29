import React, { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import Axios from "axios";
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

  const [addtocart, setAddtocart] = useState([]);
  const [totalprice, setTotalprice] = useState([]);
  const [cart, setCart] = useState([]);
  const [profile, setProfile] = useState([]);
  const [addtocarthandeler, setAddtocarthandeler] = useState([]);
  const [wish, setWish] = useState([]);




  console.log(addtocart, "addtocartokk")
  console.log(totalprice, "priceokk")
  console.log(cart, "cartokkkk") 
  console.log(profile, "profileokk")
  console.log(addtocarthandeler, "addtocarthandeler")
  console.log(wish, "wish")





  useEffect(async() => {


    // first fetch usercart

    await Axios.get(`http://localhost:5000/api/users/profile`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('auth')
      }
    }).then(async (responseok) => {

      // console.log(responseok.data, "responseokkkkkkkk")

      // if(responseok.data[0] && localStorage.getItem('auth') )
      // this.setState({wish:responseok.data[0].wishlist,wishlistnumber:responseok.data[0].wishlist.length})
      let cartItems = [];
      let wishitems = []
      if (responseok.data && responseok.data[0]) {
        if (localStorage.getItem('auth') && responseok.data[0].cart) {
          if (responseok.data[0].cart.length > 0) {

            responseok.data[0].cart.forEach(item => {
              cartItems.push(item.id)
            });


          }
        }
        if (localStorage.getItem('auth') && responseok.data[0].wishlist) {
          if (responseok.data[0].wishlist.length > 0) {

            responseok.data[0].wishlist.forEach(item => {
              wishitems.push(item.id)
            });


          }
        }
      }

      if (wishitems.length) {
        await Axios.get(`http://localhost:5000/api/product/products_by_id?id=${wishitems}&type=array`)
          .then(result => {

           

            setWish(result.data)
            // console.log(result.data,"wishhhhhhhhh")

            // this.setState({wish:result.data,wishlistnumber:result.data.length})
          })
      }
      else {
        // this.setState({wish:[],wishlistnumber:0 })
      }

      if (cartItems.length) {
        await Axios.get(`http://localhost:5000/api/product/products_by_id?id=${cartItems}&type=array`)
          .then(response => {
            //   console.log(responseok.data.cart)



            //Make CartDetail inside Redux Store 
            // We need to add quantity data to Product Information that come from Product Collection. 
            let totalproduct = 0;
            let price = 0;

            responseok.data[0].cart.forEach(cartItem => {
              response.data.forEach((productDetail, i) => {
                if (cartItem.id === productDetail._id) {
                  response.data[i].quantity = cartItem.quantity;
                  totalproduct += parseInt(cartItem.quantity)
                  price += parseInt(productDetail.price) * parseInt(cartItem.quantity)


                }
              })
            })


            setAddtocart(totalproduct)
            setTotalprice(price)
            setCart(response.data)
            setProfile(responseok.data)
            


            // this.setState({ addtocart: totalproduct, cart: response.data, totalprice: price })


          }).catch(err => {
            // this.componentDidMount()
            console.log(err)
            setAddtocart(0)
            setTotalprice(0)
            setCart([])
            // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
          })

      } else {
        setAddtocart(0)
        setTotalprice(0)
        setCart([])
        // this.setState({ addtocart: 0, cart: [], totalprice: 0 })
      }


    })



  }, []);


  let addTowishlist = (_id, type) => {
    console.log(_id,"idddddddddddddd")
    if (!localStorage.getItem('auth'))
        return alert('Please Login to add to wish list')
    Axios.get(`http://localhost:5000/api/users/addToWish?productId=${_id}&type=${type}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth': localStorage.getItem('auth')
        }
    })
        .then(response => {
            
            if(response.data.duplicate)     
            alert('Already in Your Wishlist')
            // else
            //  this.componentDidMount()

           
           

        }

        );

}



  let addToCarthandler = (_id, type) => {

    if (!localStorage.getItem('auth'))
      return alert('login to cart product')
    Axios.get(`http://localhost:5000/api/users/addToCart?productId=${_id}&type=${type}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth': localStorage.getItem('auth')
      }
    })
      .then(response => {

        // if(response.data.duplicate) 
        
        // console.log(response.data.duplicate,"Already in Your Cartlist")
        // alert('Already in Your Cartlist')
        
        // this.componentDidMount()

      

       
          setAddtocarthandeler(response.data)
        

        console.log(response.data, "addToCarthandler");
   
      }

      );
  }


  let removeFromCart = (_id) => {

    if (!localStorage.getItem('auth'))
        return alert('login to cart product')
    Axios.get(`http://localhost:5000/api/users/removeFromCart?productId=${_id}`, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'auth': localStorage.getItem('auth')
        }
    })
        .then(response => {
            console.log('err');
            addToCarthandler()
            // this.componentDidMount();
            console.log(response.data);

        }

        ).catch(err => {
            console.log(err);
        })

}


let removeFromWish = (_id) => {

  if (!localStorage.getItem('auth'))
      return alert('login to cart product')
  Axios.get(`http://localhost:5000/api/users/removeFromWish?productId=${_id}`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
  })
      .then(response => {
          console.log('err');
          // this.componentDidMount();
          console.log(response.data);

      }

      ).catch(err => {
          console.log(err);
      })

}

 


  return (
    <div>
      {/* {JSON.stringify(cdata)} */}
      {/* cdata={sum} */}
      <Navbar addtocarthandeler={addtocarthandeler} wish={wish} />
      <Routes>
        {/* cartSet={cartSet}  */}
        <Route path="*" element={<Home addToCarthandler={addToCarthandler} addTowishlist={addTowishlist} />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/single" element={<Single />} />
        <Route path="/wishlist" element={<Wishlist wish = {wish} addToCarthandler ={addToCarthandler} removeFromWish={removeFromWish}/>} />

        <Route path="/register" element={<Register />} />
        <Route path="/addtocart" element={<AddtoCart cart = {cart}  addToCarthandler={addToCarthandler} removeFromCart={removeFromCart}/>} />
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