import React, { useEffect } from 'react';
import './article.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Article = ({ imageurl, date, text }) => {
  useEffect(() => {
    AOS.init({
      duration:"1000"
    }); 
  }, []);

  return (
    <div  data-aos="fade-up" className='gpt3__blog-container_article'>
      <div data-aos="fade-up" className="gpt3__blog-container_article-image">
        <img src={imageurl} alt="blog" />
      </div>
      <div data-aos="fade-up" className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;
