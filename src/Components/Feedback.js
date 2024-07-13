import React,{useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import './css/feedback.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ceo from '../Images/ceo.png'
import left from '../Images/left.png'
import right from '../Images/right.png'
const testimonials = [
  {
    name: 'John Doe',
    testimonial: 'Gaskon Consultings insightful analysis of our industry and target audience has been instrumental in crafting tailored campaigns that seamlessly reach and captivate our customers. Their innovative ideas and state-of-the-art techniques have consistently propelled us ahead of the competition',
    role:'CEO of Basecamp Corp'
  },
  {
    name: 'Sara Taylor',
    testimonial: 'Gaskon Consultings insightful analysis of our industry and target audience has been instrumental in crafting tailored campaigns that seamlessly reach and captivate our customers. Their innovative ideas and state-of-the-art techniques have consistently propelled us ahead of the competition',
    role:'CEO of Basecamp Corp'
},
];

const NextArrow = ({ onClick }) => {
    return (
      <div className="custom-next-arrow" onClick={onClick}>
         <img src={right} alt='fd' style={{width:"50px"}}/>
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="custom-prev-arrow" onClick={onClick}>
        
        <img src={left} alt='fd' style={{width:"50px"}}/>


      </div>
    );
  };
  
const TestimonialCarousel = () => {
    const [data, setData] = useState("ds");
    const customStatusFormatter = (currentItem, total) => {
        setData(` ${currentItem + 1} / ${total}`);
        return data;
      };
    return (
      <div className="carousel-container">
        <Carousel  showThumbs={false} showStatus
      statusFormatter={customStatusFormatter} infiniteLoop
      renderArrowNext={(onClick) => (
        <NextArrow onClick={onClick}/>
      )}
      renderArrowPrev={(onClick) => (
        <PrevArrow onClick={onClick}/>
      )}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <p className="testimonial-text">{testimonial.testimonial}</p>
              <div className="author-info">
                
                <img style={{width:"50px"}} src={ceo} alt={testimonial.name} />
                <div className='names'>
                <p className="author-name">{testimonial.name}</p>
                <p className="author-role">{testimonial.role}</p>
                </div>
                 
                <div>
                <div className='trig'>
                   <p className='carousel-status'>{data}</p>
                </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
         <br/>
         <br/>
      </div>
    );
  };
export default TestimonialCarousel;
