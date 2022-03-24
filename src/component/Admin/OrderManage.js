import React from 'react'
import { Link } from 'react-router-dom'
import './OrderManage.css'
export default function OrderManage() {
  return (
    <>

      <div className='orcontainerss' >
        <h2>Order Manage </h2>
        <table>
          <tbody><tr>
            <th>SL</th>
            <th>Order ID</th>
            <th>Status</th>
            <th>Date/Time</th>
            <th>Invoices</th>
            <th>Order Details</th>
            <th>Action</th>

          </tr>
          <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              
              <td>
              <Link to="/editorder"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              
              <td>
              <Link to="/ordertracking"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              
              <td>
              <Link to="/ordertracking"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>
            <tr>
              <td>Cleveland</td>
              <td>Brown</td>
              <td>$250</td>
              <td>$100</td>
              <td>$100</td>
              <td>$100</td>
            </tr>

            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              
              <td>
              <Link to="/ordertracking"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>


            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              
              <td>
              <Link to="/ordertracking"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>



 

        
          </tbody></table>
      </div>
    </>
  )
}
