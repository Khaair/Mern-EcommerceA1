import React from 'react'
import { Link } from 'react-router-dom'
import './UserManage.css'



export default function AdminSidebar() {
  return (
    <div>
        <Link to="/"><i className="fa fa-fw fa-home" /> Home</Link>
          <Link to="/ordermanage">  <i className="fa fa-fw fa-wrench" /> Order Manage</Link>
          <Link to="/usermanage"> <i className="fa fa-fw fa-wrench" /> User Manage</Link>
          <Link to="/productmanage"><i className="fa fa-fw fa-wrench" /><span style={{ marginLeft: "7px" }}>Product Manage</span></Link>
          <Link to="/addproduct" ><i class="fa fa-product-hunt" aria-hidden="true" /><span style={{ marginLeft: "10px" }}>Product Add</span></Link>
         
    </div>
  )
}
