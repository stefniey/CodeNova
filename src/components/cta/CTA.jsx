import React, { useEffect } from 'react';
import './cta.css';
import 'aos/dist/aos.css'; 

import AOS from 'aos';
import 'aos/dist/aos.css';

const CTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  return (
    <div data-aos="fade-up" className='gpt3__cta'>
      <div className="gpt3__cta-content">
        <p>Request Early Access to Get Started</p>
        <h3>Register Today & start exploring the endless possibilities.</h3>
      </div>
      -
      <div className="gpt3__cta-btn" data-aos="fade-up" data-aos-delay="300">
        <button type="button">Get Started</button>
      </div>
    </div>
  );
};

export default CTA;
