import React from 'react'
import './Order.css'
import { Link } from "react-router-dom";


export default function Order() {
  return (
    <div>
        <div>
  <h2>Colored Table Header</h2>
  <table>
    <tbody><tr>
        <th>SL</th>
        <th>Order ID</th>
        <th>Status</th>
        <th>Date/Time</th>
        <th>Invoices</th>
        <th>Order Details</th>

      </tr>
      <tr>
        <td>Peter</td>
        <td>Griffin</td>
        <td><button>Order</button></td>
        <td>$100</td>
        <td><button>Order</button></td>
       <Link to="/ordertracking"><td><button>Check</button></td></Link> 
      </tr>
      <tr>
        <td>Lois</td>
        <td>Griffin</td>
       
        <td><button>Order</button></td>
        <td>$100</td>
        <td><button>Order</button></td>
        <td><button>Order</button></td>
      </tr>
      <tr>
        <td>Joe</td>
        <td>Swanson</td>
        <td>$300</td>
        <td>$100</td>
        <td>$100</td>
        <td>$100</td>
      </tr>
      <tr>
        <td>Cleveland</td>
        <td>Brown</td>
        <td>$250</td>
        <td>$100</td>
        <td>$100</td>
        <td>$100</td>
      </tr>
    </tbody></table>
</div>

    </div>
  )
}
