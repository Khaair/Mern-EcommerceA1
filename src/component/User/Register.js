import React from 'react'
import './Register.css'
import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav';

export default function Register() {
  return (
    <div>
      <ProfileNav/>

       <div className="div1">
  <div className="containerss">
    <h2>Registration Form</h2>
    <form>
      <label className="name">First Name</label>
      <br />
      <input className="text" type="text" name placeholder="First Name" />
      <br />
      <label className="name">Last Name</label>
      <br />
      <input className="text" type="text" name placeholder="Last Name" />
      <br />
      <label className="name">Father Name</label>
      <br />
      <input className="text" type="text" name placeholder="Father Name" />
      <br />
      <label className="name">Country</label>
      <br />
      <select className="text">
        <option>USA</option>
        <option>Canada</option>
        <option>Bangladesh</option>
      </select>
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
      <button className="btn">SUBMIT</button>
      <p>Already have an account?Sign In</p>

      
    </form></div></div>

           

    </div>
  )
}
