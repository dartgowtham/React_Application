import React from 'react'
import './css/contactus.css'
export default function Contact_us() {
  return (
    <div className='contactus'>
        <div className='left'>
            <h2>
            We're Committed to Providing You with the Best Possible Service
            </h2>
            <p>Contact Gaskon Consulting Today and Let’s Get Started!</p>
            <div className='grp1'>
            <button className='btn'>More Questions</button>
            <p style={{color:'black',fontSize:"16px",fontWeight:500}}>Contact Us</p>

            </div>
        </div>
        <div className='right'>
            <h4>Schedule</h4>
            <h4>Diagnostic</h4>
            <h4>Develop</h4>
            <h4>Service</h4>
        </div>
        <div></div>
    </div>
  )
}
