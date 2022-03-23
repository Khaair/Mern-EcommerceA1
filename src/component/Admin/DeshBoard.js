import React from 'react'
import './DeshBoard.css'

import AdminSidebar from './AdminSidebar';






export default function DeshBoard() {
  return (
    <>
      <div>
        <div className="sidebar">
          <AdminSidebar/>
        </div>
        <div className="main">
          <h1>Deshboard</h1>
        

        </div>
      </div>

    </>
  )
}
