
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './UserManage.css'


export default function ProductManage() {

    const [data, setData] = useState([]);

    console.log(data)


    useEffect(async () => {
        await axios.post(`http://localhost:5000/api/Product/getProducts`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('auth')
            }
        }).then(res => {
            setData(res.data.products);
            // console.log(res.data.products)


        }).catch(err => {
            console.log(err)
        })
    }, [])


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
                        <th>SKU NUMBER</th>
                        <th>PRICE</th>
                        <th>QUANTIITY</th>
                        <th>WEIGHT</th>

                        <th>Action</th>

                    </tr>
                        {data.map((el, ind) => {
                            return (
                                <tr key={ind}>
                                    <td scope="row">{ind + 1}</td>
                                    <td>{el.skunumber}</td>
                                    <td>{el.price}</td>
                                    <td>{el.quantity}</td>
                                    <td>{el.weaight}</td>

                                    <td>
                                        <Link to={`/edit/${el._id}`}><button className="btn btn-success mright">
                                            {" "}
                                            Edit</button></Link>


                                        {/* <button onClick={() => deleteMe(el._id)} className="btn btn-danger" >Delete</button> */}
                                    </td>
                                </tr>
                            )

                        })}


                    </tbody></table>
            </div>
        </div>
    )
}
