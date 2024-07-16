import React from 'react'
import logo from '../Images/logo.png'
import './css/Navbar.css'


export default function Navbar() {
  return (
    <div className='navbar'>
        {/* <div className='logo'> 
            <img src={logo} alt='logo'/>
        </div> */}
        <div className='logoContainer'>
        <img src={logo} alt="GASKON Logo" className='logo' />
      </div>
        <div></div>
        <div></div>
        <div className='lists'>
            <ul>
            <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Our Team</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
        </div>
        
        <div></div>
        
        <div></div>
        <div className='btn1'>
            <button className='get_btn'>Get Started</button>
        </div>
      
    </div>
  )
}
