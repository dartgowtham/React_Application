import React,{useState} from 'react'
import logo from '../Images/logo.png'
import './css/Navbar.css'


export default function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (

    <div className='navbar'>
        <div className='container'>
        <div className='logoContainer'>
        <img src={logo} alt="GASKON Logo" className='logo' />
      </div>
        <div></div>
        <div></div>
        <div  className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <ul>
            <li><a href='#'>Home</a></li>
                <li><a href='#'>About Us</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li><a href='#'>Our Team</a></li>
                <li><a href='#'>Contact Us</a></li>
            </ul>
            <div className='btn1'>
            <button className='get_btn'>Get Started</button>
        </div>
        </div>
        <div></div>
        <div></div>
      
        </div>
        <div className="burger" onClick={toggleNavbar}>
          <div className={`line1 ${isOpen ? 'active' : ''}`}></div>
          <div className={`line2 ${isOpen ? 'active' : ''}`}></div>
          <div className={`line3 ${isOpen ? 'active' : ''}`}></div>
        </div>
    </div>
  )
}
