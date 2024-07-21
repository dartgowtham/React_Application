import React from 'react'
import arrow from '../Images/arrow-right blue.png'
import logo from '../Images/logo.png';
import fb from '../Images/social/fb.png'
import tw from '../Images/social/tw.png'
import insta from '../Images/social/insta.png'
import linkf from '../Images/social/link.png'

import call from '../Images/social/call.png'
import email from '../Images/social/email.png'
import loco from '../Images/social/loco.png'
import './css/footer.css'
import Feedback from './Feedback'
export default function footer() {
  return (
    <>
        <div className='footer'>
          {/* <Feedback/> */}
        <div className='top'>
            
        <h1 className='heade'>Get in touch</h1>
        <div className='call'>
            <button className='btn'>Schedule a Call<img src={arrow} alt='d'/></button>
            </div>
      
        </div>
        <br/>
        <br/>
        <div className='bottom'>
            <div>
            <img src={logo} alt="logo" className='imsl'/>
            <p className='fp'>Discover the Gaskon Consulting Advantage: Tailored Solutions, Strategic Excellence, and a Commitment to Your Success.</p>
            <div className='social'>
                <img src={fb} alt='fd'/>
                <img src={insta} alt='fd'/>
                <img src={tw} alt='fd'/>
                <img src={linkf} alt='fd'/>
            </div>  
           
           </div>
          <div className='mid'>
            <h4>Navigation</h4>
            <p>About Us</p>
            <p>Case Study</p>
            <p>Resource</p>
          </div>
          <div className='license'>
            <h4>License</h4>
            <p>Privacy Policy</p>
            <p>Copyright</p>
             <p>Email Address</p>
          </div> 
          <div className='contact'>
            <h4>Contact</h4>
         <li><img src={call} alt='df'/> 817-880-1304</li> 
            <li><img src={email} alt='df'/>gaskon.io</li>
            <li><img src={loco} alt='df'/>2972 Westheimer Rd. Santa Ana,Illinois 85486</li>

          </div>
         
        </div> 
        </div>
</>
  )
}
