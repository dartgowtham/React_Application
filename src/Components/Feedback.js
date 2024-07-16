 
import ceo from '../Images/ceo.png'
import left from '../Images/left.png'
import right from '../Images/right.png'
 
import React, { useState } from 'react';
import './css/feedback.css'; // Import CSS for styling (see below)


const testimonials = [
  {
    id: 1,
    author: 'Sara Taylor',
    quote: '“Gaskon Consultins insightful analysis of our industry and target audience has been instrumental in crafting tailored campaigns that seamlessly reach and captivate our customers. Their innovative ideas and state-of-the-art techniques have consistently propelled us ahead of the competition.',
    role:"CEO of Basecamp Corp"
  },
  {
    id: 2,
    author: 'Jane Smith',
    quote: '“ideas and state-of-the-art techniques have consistently propelled us ahead of the competition.',
    role:"CEO of Basecamp Corp"

  },
  // Add more testimonials as needed
];

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === testimonials.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? testimonials.length - 1 : currentSlide - 1);
  };

  return (
    <div className="testimonial-slider">
       <br/>
       <br/>
      <div className="testimonial">
        <p className="quote">{testimonials[currentSlide].quote}</p>
        </div>
        <div className='author-details'>
          <img src={ceo} alt='f' style={{width:"50px",height:"50px"}}/>
        <div>
        <p className=".names"> {testimonials[currentSlide].author}</p>
        <p className="author-role"> {testimonials[currentSlide].role}</p>
      </div>
      <div className="navigation">
        <button onClick={prevSlide}>&#8249;</button>
        <span className="slide-count">{currentSlide + 1} / {testimonials.length}</span>
        <button onClick={nextSlide}>&#8250;</button>
      </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
