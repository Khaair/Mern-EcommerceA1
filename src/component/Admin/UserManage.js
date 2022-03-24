import React from 'react'
import { Link } from 'react-router-dom'
import './UserManage.css'


export default function UserManage() {
    return (
        <div>
            <div className='orcontainerss'>
                <h2>User Manage</h2>
                <table>
                    <tbody><tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Transaction</th>
                        <th>Action</th>

                    </tr>
                        <tr>
                            <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                            <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                            
                            
                        </tr>
                        <tr>
                        <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                            <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                        <tr>
                        <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                            <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                        <tr>
                        <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                            <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>

                        <tr>
                        <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                            <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                            <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
                            </td>
                        </tr>
                    
                    </tbody></table>
            </div>
        </div>
    )
}
