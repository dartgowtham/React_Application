import React from 'react'
import './css/thinking.css'
import dot from '../Images/dot.png'
export default function Thinking() {
  return (
    
    <div className='tk'>
    <div className='thinking'>
        <div className='left'>
            <h1>Thinking forward for your results.</h1>
        </div>
        <div className='right'>
            <p>In the pursuit of your success, Gaskon Consulting takes a forward-thinking stance, anticipating opportunities and challenges to drive optimal results. Our commitment to innovation, strategic foresight, and proactive solutions positions your business on a trajectory of sustained growth. Experience the impact of thinking forward with Gaskon Consulting as your strategic partner.</p>
        </div>
    </div>
    <div className='lists'>
        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Strategic Business Planning</h4>
             <p>Consulting services that empower companies</p>
        </div>

        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Financial Optimization and Analysis</h4>
             <p>Consulting services that empower companies</p>
        </div>

        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Operational Efficiency Enhancement</h4>
             <p>Consulting services that empower companies</p>
        </div>

        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Market Research and Expansion Strategy</h4>
             <p>Consulting services that empower companies</p>
        </div>

        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Expertise Across Industries</h4>
             <p>Consulting services that empower companies</p>
        </div>

        <div className='card'>
             <img src={dot} alt=""/>
             <h4>Proven Track Record of Success</h4>
             <p>Consulting services that empower companies</p>
        </div>    
      
    </div>
       
    </div>
  )
}
