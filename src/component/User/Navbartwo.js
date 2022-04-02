import React from 'react'
import './Navbartwo.css'
import { Link } from "react-router-dom";

export default function Navbartwo() {
    return (
        <>
            <div className="navbar">
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown
                        <i className="fa fa-caret-down" />
                    </button>
                    <div className="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>

            <h3>Dropdown Menu inside a Navigation Bar</h3>
<p>Hover over the "Dropdown" link to see the dropdown menu.</p>

        </>
    )
}


