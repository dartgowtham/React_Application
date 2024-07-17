import React from 'react'
import './css/fund.css'
import line from '../Images/lines.png'
export default function Fund() {
  return (
    <div className='fund'>
        <h1 style={{textAlign:"center",fontSize:"46px",marginBottom:0}}>Funding Raised</h1>
        <div className='amont'>
            <div className='div_amont'>
            <h1>200<span className='last'>K</span><span className='curency' >USD</span></h1>
            <h4>May, 2021</h4>
            </div>
            <div className='div_amont'>
            <h1>1.6<span className='last'>K</span><span className='curency' >USD</span></h1>
            <h4>November, 2022</h4>
            </div>
            <div className='div_amont'>
            <h1>4.8<span className='last'>K</span><span className='curency' >USD</span></h1>
            <h4>August, 2023</h4>
            </div>
        </div>
        <div class="horizontal-line">
        <div class="icon-container">
 
  <div class="polygon-icon"></div>
</div>
<div class="icon-container">
 
  <div class="polygon-icon"></div>
</div>
        </div>
        <br/>

        <div className='lists'>
            <div className='cards'>
                <div className='number'>
                    1
                </div>
                <div className='title'>
                <h2>Embarking on the Fundraising Odyssey</h2>
                </div>
                <div className='dese'>
                    <p>Embark on a journey of ambition as we initiate our fundraising odyssey, igniting the flame for our visionary goals.</p> 
                </div>
            </div>

            <div className='cards'>
                <div className='number'>
                    2
                </div>
                <div className='title'>
                <h2>Achieving Milestones in our Fundraising Ascent</h2>
                </div>
                <div className='dese'>
                    <p>Witness the heights we reach, celebrating milestones in our fundraising ascent with each successful step towards realizing our ambitions.</p> 
                </div>
            </div>

            <div className='cards'>
                <div className='number'>
                    3
                </div>
                <div className='title'>
                <h2>Triumph at the Pinnacle of Success</h2>
                </div>
                <div className='dese'>
                    <p>Celebrating the Completion of Our Fully Funded Ambitions and Setting New Horizons</p> 
                </div>
            </div>

            
        </div>           
     </div>
  )
} 
