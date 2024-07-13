import React from 'react'
import arrow from '../Images/arrow-right blue.png'
import logo from '../Images/logo.png';
import fb from '../Images/social/fb.png'
import tw from '../Images/social/tw.png'
import insta from '../Images/social/insta.png'
import linkf from '../Images/social/link.png'
import './css/footer.css'
export default function footer() {
  return (
    <>
        <div className='footer'>
        <div className='top'>
            
        <h1>Get in touch</h1>
        <div className='call'>
            <button className='btn'>Schedule a Call<img src={arrow} alt='d'/></button>
            </div>
      
        </div>
        <div className='bottom'>
          <div className='left'>
            <img src={logo} alt="logo"/>
            <p style={{width:"300px"}}>Discover the Gaskon Consulting Advantage: Tailored Solutions, Strategic Excellence, and a Commitment to Your Success.</p>
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
         
        </div>
        </div>
</>
  )
}
