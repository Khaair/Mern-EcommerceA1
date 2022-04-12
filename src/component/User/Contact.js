import React from 'react'
import './Home.css'
import PCard from './PCard';
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
              <div className="four">
          <h3 className='marr'>Offer Product</h3>


          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard/></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>



          </div>

          <h3 className='marr'>NEW ARRIVALS</h3>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>

          <h3 className='marr'>Laptop & Computer</h3>

          <div className='cardd'>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
            <Link className='llnk' to="/single"><PCard /></Link>
          </div>
        </div>
    </div>
  )
}
