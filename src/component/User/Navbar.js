import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'
// import {useSelector,useDispatch} from 'react-redux'
// import {increment,decrement} from '../Services/Actions/CounterAction'


function Navbar({addtocarthandeler,wish}) {

  const [lgin, setLgin] = useState([]);

  // let naddtocarthandeler = [...addtocarthandeler]

  // let arr = []
  // for (var key in naddtocarthandeler) {
  //   var obj = naddtocarthandeler[key].quantity;
  //   arr.push(obj)

  // }
  // const sum = arr.reduce((a, b) => a + b, 0);
  

  // console.log(sum,"summm")

  useEffect(() => {
    const login = localStorage.getItem('auth')
    
    // console.log(login)
    setLgin(login)
    // console.log(cdata,'kkkk')
    

  }, []);

  
  // const dispatch = useDispatch()
  return (

    <>
      <div className='navcontainer'>
        <ul className='navv'>
          <div className='logo'>
            <Link className='logolink' to="/"><h3 >BD <span className='logospan'>ECom</span></h3></Link>
          </div>
          <div className='searchh'>
            <input className='inp' placeholder="Search Here" />
            <button className='inpsearch' ><i className="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
          <li> <Link className='lnk' to="/">Home</Link> </li>
          
          <li> <Link className='lnk' to="/about">Top Sell</Link> </li>
          <li> <Link className='lnk' to="/contact">Offers</Link> </li>  
          <li> <Link className='lnk' to="/addtocart"><img style={{ height: '40px' }} src='img/addtocart.png' alt='kii' />{lgin?<sup>{addtocarthandeler.length}</sup>:<><></></>}</Link> </li>
          <li> <Link className='lnk' to="/wishlist"><img style={{ height: '40px' }} src='img/wishlistt.png' alt='kii' /><sup>{wish.length}</sup></Link> </li>
          <li> <Link className='lnk' to="/profile"><img style={{ height: '30px' }} src='img/proo.png' alt='kii' /></Link> </li>
          <li> <Link className='lnk' to="/admin"><img style={{ height: '35px' }} src='img/Admin.png' alt='kii' /></Link> </li>

        </ul>

      </div>
    </>
  )
}

export default Navbar
