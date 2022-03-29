import React from 'react'
import './Register.css'
import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav';

export default function Register() {
  return (
    <div>
      <ProfileNav/>

       <div className="div1">
  <div className="rcontainerss">
    <h5>Registration Form</h5>
    <hr></hr>
    <form>
      <label className="name">Name</label>
      <br />
      <input className="text" type="text" name placeholder="First Name" />
      <br />
      <label className="name">Email</label>
      <br />
      <input className="text" type="email" name placeholder="Last Name" />
      <br />
      <label className="name">Mobile Number</label>
      <br />
      <input className="text" type="number" name placeholder="Father Name" />
      <br />
     
     
      <div>
        <label className="name">Select Gender</label>
        <br />
        <input type="radio" id="male" name="gender" defaultValue="male" />
        <label htmlFor="male">Male</label><br />
        <input type="radio" id="female" name="gender" defaultValue="female" />
        <label htmlFor="female">Female</label><br />
        <input type="radio" id="other" name="gender" defaultValue="other" />
        <label htmlFor="other">Other</label>
      </div>
      <button className="regbtn">SIGN UP</button>
      <p>Already have an account?<Link to="/profile">Sign In</Link></p>

      
    </form></div></div>

           

    </div>
  )
}
