import React from 'react'
import Footer from './Footer'

import Dropdown from 'react-bootstrap/Dropdown';

import MyGallery from './MyGallery'
import './Single.css'
import PCard from './PCard';

export default function Single() {
  return (
    <>
      <div className='Scontainers'>
        <div className='sone'>
          <MyGallery />
        </div>
        <div className='stwo'>
          <div className='mar'>
            <h3 className='llo'>Product Name: Product 01</h3>
            <p>
              Discover 159 free Registered Logo png images with transparent backgrounds.Search more hd transparent Registered Logo image on KindPNG.Search more hd transparent Registered Logo .
            </p>
            <h3 className='llo'>Current Price: 44556 taka</h3>
            <p>
              Discover 159 free Registered Logo png images with transparent backgrounds.Search more hd transparent Registered Logo image on KindPNG.Search more hd transparent Registered Logo .
            </p>

            <div>

              <label htmlFor="exampleInputPassword1" className="form-label">Available Size</label>

              <select className="form-select" aria-label="Default select example">
                <option selected>XL</option>
                <option value={1}>L</option>
                <option value={2}>M</option>
                <option value={3}>S</option>
              </select>
              <br></br>

              <button className='sbtnn'>Add to Cart</button>







            </div>

          </div>


        </div>
        <div className='sthree'>
         
          <div className='cmnt'>
          <h1>Comment Section</h1>
          <input className='cmntinput'></input>
          <br></br>
          <button style={{marginTop:"40px"}}>Comment</button>
          </div>
        
        </div>

        <div className='stranding'>
          <h1 className='marr'>Tranding Product</h1>

          <div className='cardd'>
            <PCard />
            <PCard />
            <PCard />
            <PCard />
          </div>
        </div>



        <div className='sfour'>
          <Footer />
        </div>

      </div>

    </>
  )
}
