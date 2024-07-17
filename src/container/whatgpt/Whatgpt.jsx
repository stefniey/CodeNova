import React, { useEffect } from 'react';
import { Feature } from '../../components';
import './whatgpt.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

const Whatgpt = () => {
  useEffect(() => {
    AOS.init({
      duration:"1000"
    }); 
  }, []);

  return (
    <div className='gpt3__whatgpt section__margin' id='wgpt'>
      <div className="gpt3__whatgpt-feature" data-aos="fade-right"> 
        <Feature
          title='What is GPT-3?'
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by"
        />
      </div>
      <div className="gpt3__whatgpt-heading" data-aos="fade-left"> 
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
          data-aos="fade-up" 
        />

        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          data-aos="fade-up"
        />

        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          data-aos="fade-up"
        />
      </div>
    </div>
  );
}

export default Whatgpt;
