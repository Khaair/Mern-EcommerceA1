import axios from 'axios';
import React,{useEffect,useState} from 'react'
import ProfileNav from './ProfileNav';

import './UserProfile.css'
export default function UserProfile() {

  const [user, setUser] = useState([]);
  
  // console.log(product)


  useEffect(async() => {
    await axios.get(`http://localhost:5000/api/users/profile`, {
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'auth': localStorage.getItem('auth')
      }
  }).then(res=>{
    setUser(res.data[0].fullname)
    console.log(res.data[0].fullname)

    //  setProduct(res.data.products)

    // this.setState({profile:res.data})
  }).catch(err=>{
    console.log(err)
  })
  })


  return (
    <div>
     <ProfileNav/>
      <div className="profileContainer">
        <div className="pone">
         
          <img   className='imgg ootouteroneimgdiv' src='img/man.jpg' alt='hhh' />
          
         
        </div>
        <div className="ptwo">
          <h6>ID: 23456789</h6>
          <h6>User Name: {user}</h6>


          <h6>Email: khair.cse.iu@gmai.com</h6>
          <h6>Status: Pending</h6>
          <h6>Transaction: Pending</h6>
          <h6>Address: Road-11,Jatrabari,Dhaka</h6>
        </div>
      </div>

    </div>
  )
}
