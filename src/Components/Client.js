import React from 'react'
import './css/client.css'
import bul from '../Images/Check.png'

import p1 from '../Images/people/1.png'
import p2 from '../Images/people/2.png'
import p3 from '../Images/people/3.png'
import p4 from '../Images/people/4.png'
import plus from '../Images/people/+.png'

export default function Client() {
  return (
    <div className='client'> 
        <div className='top'>
            <div className='left'>
            <h1>Our Expertise in Business Consulting</h1>
            </div>
          
             
            <div className='right'>
                <ul>
                    <li><img src={bul} alt="djls"/> <p>Dedicated Client-Centric Approach</p></li>
                    <li><img src={bul} alt="djls"/> <p>Continuous Learning and Innovation</p></li>
                    <li><img src={bul} alt="djls"/> <p>Expertise Across Industries</p></li>
                </ul>
            </div>
          
             

        </div>
        <div className='bottom'>
            <p>Gaskon Consulting is a trusted partner for businesses seeking excellence. With a proven track record in the industry, we offer a unique blend of strategic insight, data-driven decision-making, and personalized solutions. Our team comprises seasoned consultants who bring years of experience across various sectors. We pride ourselves on understanding the intricacies of your industry and leveraging that knowledge to drive your success.</p>
           
        </div>
        
    </div>
    
  )
}
