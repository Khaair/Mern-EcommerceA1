import React from 'react'
import { Link } from 'react-router-dom'
import './DeshBoard.css'




export default function DeshBoard() {
  return (
    <>
<div>
  <div className="sidebar">
    <a href="#home"><i className="fa fa-fw fa-home" /> Home</a>
    <a href="#services"><i className="fa fa-fw fa-wrench" /> Services</a>
    <Link to="/addproduct"><i className="fa fa-fw fa-user" />Product</Link>
    <a href="#contact"><i className="fa fa-fw fa-envelope" /> Contact</a>
  </div>
  <div className="main">
  <h1>Deshboard</h1>

  </div>
</div>

  </>
  )
}
