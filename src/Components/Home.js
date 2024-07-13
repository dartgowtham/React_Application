import React from 'react'
import './css/Home.css'
import logo1 from '../Images/company_logo1.png';
import logo2 from '../Images/company_logo2.png';
import logo3 from '../Images/company_logo3.png';

import arrow from '../Images/arrow-right.png'

import city from '../Images/home_half.png';
import group from '../Images/Group.png';
import count from '../Images/count.png'
import img3 from '../Images/image3.png'


export default function Home() {
  return (
    <div id="home">
        <div className='home_left'>
            <div className='top'>
            <h1 className='title'>Expert Consulting & Innovative Solution</h1>
            <p className='content'>Gaskon is your trusted Partner for Business Excellence. With a proven track record and a team of seasoned consultants spanning diverse industries, we deliver tailored solutions dedicated to propelling your success. Explore the power of stratigic insight, data-driven decision-making, and personalized solutions. Your journey to business elevation begins here at Gaskon Consulting</p>
            </div>

            <div className='mid'>
            <button className='btn'>Get Started <img src={arrow} alt='d'/></button>
            </div>

            <div className='bottom'>
            <div className='title'>
            <p style={{width:"200px"}}>Trusted by the world's biggest brands</p>
            </div>
            <div className='company_logo1'>
                 <img src={logo1} alt='company_logo'/> 
            </div>
            <div className='company_logo1'>
                 <img src={logo2} alt='company_logo'/> 
            </div>
            <div className='company_logo1'>
                 <img src={logo3} alt='company_logo'/> 
            </div>
            </div>
        </div>
        <div className='home_right'>
            <div className='top'>
            <div className='group'>
            <img src={city} alt="Image 1" width="308px" height="281"/>
            <img src={group} alt='image 2' className='image2'/>
            </div>
            <div>
            <img src={count} alt='image 3'/>
            </div>
            </div>
            <br/>
            <div>
            <img src={img3} alt='image 4'/>
            </div>
        </div>

    </div>
  )
}
