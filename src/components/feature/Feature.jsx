import React, { useEffect } from 'react';
import './feature.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feature = ({title, text}) => {
  useEffect(() => {
    AOS.init({
      duration:'1000'
    });
  }, []);

  return (
    <div className='gpt3__features-container__feature' data-aos="fade-up">
      <div className="gpt3__features-container__feature-title">
        <div />
        <h1 data-aos="fade-up">{ title }</h1>
      </div>
      <div data-aos="fade-up" className="gpt3__features-container__feature-text">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature;
