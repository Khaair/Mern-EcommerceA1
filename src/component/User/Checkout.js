import React from 'react'
import './Checkout.css'
import { Link } from "react-router-dom";
export default function Checkout() {
    return (
        <div>
            <div className="div1">
                <div className="ccontainerss">
                    <h2>Billing Address</h2>
                    <hr></hr>
                    <form>
                        <label className="name">First Name</label>
                        <br />
                        <input className="text" type="text" name placeholder="First Name" />
                        <br />


                        <label className="name">Last Name</label>
                        <br />
                        <input className="text" type="text" name placeholder="Last Name" />
                        <br />

                        <label className="name">Address</label>
                        <br />
                        <input className="text" type="text" name placeholder="Address" />
                        <br />

                        <label className="name">Zip</label>
                        <br />
                        <input className="text" type="text" name placeholder="Zip" />
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
                        <Link to="/payment"><button className="placebutton">Place Order</button></Link>
                    </form></div></div>

        </div>
    )
}
