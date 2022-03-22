import React from 'react'
import Footer from './Footer'

import MyGallery from './MyGallery'
import './Single.css'

export default function Single() {
  return (
    <>
      <div className='Scontainers'>
        <div className='sone'>
          <MyGallery />
        </div>
        <div className='stwo'>
   
          

        </div>
        <div className='sthree'>
         <h1>Comment Section</h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
        </div>
        <div className='sfour'>
        <Footer/>
        </div>

      </div>

    </>
  )
}
