
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserManage.css'


export default function UserManage() {

    const [data, setData] = useState([]);

    console.log(data)


    useEffect(async () => {
        await axios.get(`http://localhost:5000/api/users/getalluser`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('auth')
            }
        }).then(res => {
            setData(res.data);
            // console.log(res.data)

            //  setProduct(res.data.products)

            // this.setState({profile:res.data})
        }).catch(err => {
            console.log(err)
        })
    },[])


    // const deleteMe = async (id) => {
    //     try {
    //       let mydata = await axios.delete(`http://localhost:5000/api/users/deleteuser/${id}`);
    //       console.log(mydata);
    
    
    //       const filterd=data.filter(a=>a._id!=id);
    //       setData(filterd)
    
    
    //     } catch (er) {
    //       console.log(er);
    //     }
    //   };
    return (
        <div>
            <div className='orcontainerss'>
                <h2>User Manage</h2>
                <table>
                    <tbody><tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Role</th>
                       
                        <th>Action</th>

                    </tr>
                        {data.map((el, ind) => {
                            return (
                                <tr key={ind}>
                                    <td scope="row">{ind + 1}</td>
                                    <td>{el.fullname}</td>
                                      <td>{el.email}</td>
                                    <td>{el.role}</td>
                                  
                                    <td>
                                        <Link to={`/edit/${el._id}`}><button className="btn btn-success mright">
                                            {" "}
                                            Edit</button></Link>


                                        {/* <button onClick={() => deleteMe(el._id)} className="btn btn-danger" >Delete</button> */}
                                    </td>
                                </tr>
                            )

                        })}
                        {/* <tr>
                            <td>Peter</td>
                            <td>Griffin</td>
                            <td>loop</td>
                            <td>$100</td>
                            <td>kk</td>

                            <td>
                                <Link to="/edituserprofile"><td><button>Edit</button></td></Link>
                                <i className="fa fa-trash-o" style={{ fontSize: '30px', color: 'red' }} />
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
                                <i className="fa fa-trash-o" style={{ fontSize: '30px', color: 'red' }} />
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
                                <i className="fa fa-trash-o" style={{ fontSize: '30px', color: 'red' }} />
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
                                <i className="fa fa-trash-o" style={{ fontSize: '30px', color: 'red' }} />
                            </td>
                        </tr> */}

                    </tbody></table>
            </div>
        </div>
    )
}
