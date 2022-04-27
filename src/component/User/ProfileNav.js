import React from 'react'
import { Link } from "react-router-dom";
import './ProfileNav.css'


export default function ProfileNav() {

  const logout=()=>{
    localStorage.setItem('auth', []);
    localStorage.setItem('userrole', []);
    localStorage.setItem('username', []);

    alert("You are Logedout")
  }
  return (
    <div>
      <div className='pronav'>
        <Link to="/login"><button className='pronavbtn'>Login</button></Link>
        <Link to="/register"><button className='pronavbtn'>Register</button></Link>

        <Link to="/userprofile"><button className='pronavbtn'>My Profile</button></Link>
        <button className='pronavbtn' type="button" onClick={logout} >Logout</button>

      </div>
      <hr></hr>
    </div>
  )
}
