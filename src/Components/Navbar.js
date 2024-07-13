import React from 'react'
import logo from '../Images/logo.png'
import './css/Navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'> 
            <img src={logo} alt='logo'/>
        </div>
        <div></div>
        <div></div>
        <div className='lists'>
            <ul>
                <li><a href='#home'>About Us</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Our Team</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div className='btn1'>
            <button className='get_btn'>Get Started</button>
        </div>
      
    </div>
  )
}
