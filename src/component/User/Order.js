
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Order.css'


export default function Order() {

    const [data, setData] = useState([]);

    console.log(data)


    useEffect(async () => {
        await axios.get(`http://localhost:5000/getuserorder`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'auth': localStorage.getItem('auth')
            }
        }).then(res => {
            setData(res.data);
            console.log(res.data,"order tracking")


        }).catch(err => {
            console.log(err)
        })
    }, [])


   
    return (
        <div>
            <div className='orcontainerss'>
                <h2>Order</h2>
                <table>
                    <tbody><tr>
                    <th>SL</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Invoices</th>
            <th>Order Details</th>


                    </tr>
                        {data.map((el, ind) => {
                            return (
                                <tr key={ind}>
                                    <td scope="row">{ind + 1}</td>
                                    <td>{el.orderid}</td>
                                    <td><button>Status</button></td>
                                    <td>{el.createdAt}</td>

                                    <td>
                                    <button>make</button>


                                    </td>
                                    <td> 
                                    <Link to="/ordertracking"><button>Check</button></Link>


                                    </td>
                                </tr>
                            )

                        })}


                    </tbody></table>
            </div>
        </div>
    )
}
