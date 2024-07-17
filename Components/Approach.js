import React from 'react'
import img1 from '../Images/app.png'
import cimg1 from '../Images/Card/img1.png'
import cimg2 from '../Images/Card/img2.png'
import cimg3 from '../Images/Card/img3.png'
import cimg4 from '../Images/Card/img4.png'
import './css/approach.css'
export default function Approach() {
  return (
    <div className='approach'>
       
        <div className='left'>
            <h1>Our Approach</h1>
            <p>Unearth the impact of Strategic Brilliance, foster Innovation, and achieve Optimized Success with Gaskon as your trusted Business Consulting Partner.</p>
            <img src={img1} alt='f'/>
        </div>

        <div className='right'>
            <div className='card'>
                <img src={cimg1} alt='df'/>
                <div>
                    <h3>Discovery</h3>
                    <p>We meet with you to learn about your business, your goals, and your target audience.</p>
                </div>    
            </div>
            <div className='card'>
                <img src={cimg2} alt='df'/>
                <div>
                    <h3>Strategy</h3>
                    <p>We develop a customized business strategy that is based on your unique needs and goals.</p>
                </div>    
            </div>
            <div className='card'>
                <img src={cimg3} alt='df'/>
                <div>
                    <h3>Execution</h3>
                    <p>We meet with you to learn about your business, your goals, and your target audience.</p>
                </div>    
            </div>
            <div className='card'>
                <img src={cimg4} alt='df'/>
                <div>
                    <h3>Measurement</h3>
                    <p>We track the results of our campaigns so that we can make adjustments as needed..</p>
                </div>    
            </div>
        </div>
    </div>
  )
}
