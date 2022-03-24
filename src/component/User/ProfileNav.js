import React from 'react'
import { Link } from "react-router-dom";
import './ProfileNav.css'


export default function ProfileNav() {
  return (
    <div>
           <div className='pronav'>
     <Link to="/login"><button>Login</button></Link>
      <Link to="/register"><button>Register</button></Link>
    
      <Link to="/userprofile"><button>My Profile</button></Link>
     </div>
      <hr></hr>
    </div>
  )
}
