import React from 'react'
import './css/Home.css'
import Home_img from '../Images/home.png'
import img1 from '../Images/Company/img1.png'
import img2 from '../Images/Company/img2.png'
import img3 from '../Images/Company/img3.png'
import img4 from '../Images/Company/img4.png'
import img5 from '../Images/Company/img5.png'
 
 export default function Home() {
   return (
    <>
    <div id='home'>
     <div className='home'> 
      <h1 className='head'>Navigating Vast Business Horizons and Unlocking Limitless Opportunities with Gaskon Consulting's Strategic Brilliance and Innovative Solutions</h1>
     <img src={Home_img} alt='d' className='home_img'/>
     <p className='content'>Discover a realm of unparalleled business potential on our Business Opportunities. At Gaskon Consulting, we redefine success by offering strategic brilliance and innovative solutions. Navigate vast horizons, seize limitless opportunities, and transform your business future with us. Explore the possibilities and chart your course to prosperity.</p>
     </div>
     </div>
     <div className='company'>
        <h1 className='head'>Companies we Work with</h1>
        <div className='group'>
            <img src={img1} alt='f'/>
            <img src={img2} alt='f'/>
            <img src={img3} alt='f'/>
            <img src={img4} alt='f'/>
            <img src={img5} alt='f'/>
        </div>
     </div>
     <br/>
     <br/>
     </>
     

   )
 }
 