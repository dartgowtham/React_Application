import React from 'react'
import './css/about_us.css'
import about from '../Images/aboutus.png'

export default function About_us() {
  return (
    <div className='about_us'> 
    <div className='top'>
        <div className='left'>
            <h1>Professional service provided by experts with unrivalled expertise</h1>
        </div>
        <div className='right'>
            <p>At Gaskon Consulting, we are dedicated to delivering top-tier business consulting services that empower companies to achieve peak performance. Our team of experienced professionals combines industry knowledge with innovative solutions to help businesses thrive in today’s competitive landscape. Discover how Gaskon Consulting can take your organization to new heights.</p>
        </div>
    </div>
    <div className='bottom'>
        <img src={about} alt='d'/>
    </div>
    </div>
  )
}
