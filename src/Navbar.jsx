import React from 'react'
import './Navbar.css'
import { Button } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
const Navbar=()=>{

    return (
        <>

            <div className="navbar">
            
            <div>
            <ul>
            <li className="logo">
            <Button><NavLink to="/" >BakeryShop</NavLink></Button>
            </li>
            </ul>
            <ul id="list" >
           
            <li className="liname">
            <button><NavLink to="/" >Home</NavLink></button>
            </li>
            <li className="liname">
            <button><b><NavLink exact to="/desserts">Desserts</NavLink></b></button>
            </li>
            <li className="liname">
            <button><NavLink exact to="/gifts">Gifts</NavLink></button>
            </li>
            <li className="liname">
            <button><NavLink exact to="/delivery">Delivery</NavLink></button>
            </li>
            <li className="liname">
            <button><NavLink exact to="/about">About Us</NavLink></button>
            </li>
            
            </ul>
            </div>
            </div>
        </>
    )
}

export default Navbar
