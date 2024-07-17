import React from 'react'
import './css/real.css'
import img1 from '../Images/Port1.png'
import img2 from '../Images/Port2.png'
import img3 from '../Images/Port3.png'
export default function Real() {
  return (
    <>
    
    <br/>     
        <br/>     
    <br/>
<div className='main'>
    <div className='reals'>
        <h1>Real-world examples of Unveiling Gaskon Consulting's Impact on Fulfilling Marketing Objectives</h1>
    
        <div className='btn-group'>
        
            <button className='btn'>All Work [20]</button>
            <button className='btns'>Strategic Planning [10]</button>
            <button className='btn'>Financial Advisory [5]</button>
            <button className='btn'>Digital Marketing [5]</button>
            <button className='btn'>Get Started</button>
            <button className='btn'>SEO [6]</button>

        </div>
        <div className='img_group'>
        <div className='img_wrapper'>
                <img src={img1} alt='img1' />
                <div class="overlay">
                    <p>See Details</p>
                </div>
                </div>
                <div className='img_wrapper'>
                <img src={img2} alt='img2'/>
                <div class="overlay">
                    <p>See Details</p>
                </div>
                </div>
                <div className='img_wrapper'>
                <img className="ims" src={img3} alt='img3'/>
                <div class="overlay">
                    <p>See Details</p>
                </div>
                </div>
            </div>
    </div>
    
   </div>
   <br/> 
   <br/> 

   </>
  )
}
