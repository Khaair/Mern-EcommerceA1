import React from 'react';
import './Admin.css'



function Admin() {
    return (
        <div>
            <div className="div1">
                <div className="container">
                    <h2>Admin Login Form</h2>
                    <form>
                        <label className="name">Email</label>
                        <br />
                        <input className="text" type="text" name placeholder="Enter Email" />
                        <br />
                        <label className="name">Password</label>
                        <br />
                        <input className="text" type="password" name placeholder="Enter Password" />

                        <button className="btn">SUBMIT</button>



                    </form>
                </div>
            </div>

        </div>
    )
}

export default Admin
