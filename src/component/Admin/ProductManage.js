import React from 'react'
import { Link } from 'react-router-dom'
import './ProductManage.css'
export default function ProductManage() {
  return (
    <>

      <div className='orcontainerss'>
        <h2>Product Manage</h2>
        <table>
          <tbody><tr>
            <th>ID</th>
            <th>Title</th>
            <th>SKU Number</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Weight</th>
            <th>Category</th>
            <th>Action</th>

          </tr>
            <tr>
              <td>Peter</td>
              <td>Griffin</td>
              <td>Griffin</td>
            
              <td>$100</td>
              <td>Griffin</td>
              <td>Griffin</td>
              <td>Griffin</td>
              <td>Griffin</td>
              <td>
              <Link to="/editproduct"><td><button>Edit</button></td></Link>
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
              <td>Griffin</td>
              <td>Griffin</td>
              <td>
              <Link to="/editproduct"><td><button>Edit</button></td></Link>
              <i className="fa fa-trash-o" style={{fontSize: '30px', color: 'red'}} />
              </td>
              
             
            </tr>

        
          </tbody></table>
      </div>
    </>
  )
}
