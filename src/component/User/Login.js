import React from 'react'

import { Link } from "react-router-dom";
import ProfileNav from './ProfileNav';


export default function Login() {
  return (
    <div>
    <ProfileNav/>
              <div className="div1">
                <div className="container">
                    <h2>Login Form</h2>
                    <form>
                        <label className="name">Email</label>
                        <br />
                        <input className="text" type="text" name placeholder="Enter Email" />
                        <br />
                        <label className="name">Password</label>
                        <br />
                        <input className="text" type="password" name placeholder="Enter Password" />

                        <Link to="/deshboard"><button className="btnn">Login</button></Link>



                    </form>
                </div>
            </div>
       
    </div>
  )
}
