import { useEffect } from 'react';
import './brand.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { google, slack, dropbox, atlassian, shopify } from './import';

const Brand = () => {
  useEffect(() => {
    AOS.init({
      duration:'1000'
    });
  }, []);

  return (
    <div className='gpt3__brand section__padding'>
      <div data-aos="fade-up">
        <img src={google} alt="google" />
      </div>

      <div data-aos="fade-up" >
        <img src={slack} alt="slack" />
      </div>

      <div data-aos="fade-up">
        <img src={dropbox} alt="dropbox" />
      </div>

      <div data-aos="fade-up">
        <img src={atlassian} alt="atlassian" />
      </div>

      <div data-aos="fade-up">
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  )
}

export default Brand;
