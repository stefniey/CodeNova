import React from 'react';
import { Article } from '../../components';
import {blog01, blog02, blog03, blog04, blog05 } from "./import"
import './blog.css';

const Blog = () => (
  <div className='gpt3__blog section' id='blog'>
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      <div className="gpt3__blog-container">

        <div className="gpt3__blog-container_groupA">
        <Article imageurl={blog01} date= "Sept 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />

        </div>

        <div className="gpt3__blog-container_groupB">
          <Article imageurl={blog02} date= "Sept 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
          <Article imageurl={blog03} date= "Sept 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
          <Article imageurl={blog04} date= "Sept 26, 2023" text="GPT-3 and Open  AI is the future. Let us exlore how it is?"  />
          <Article imageurl={blog05}  date= "Sept 26, 2023"  text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />

        </div>
      </div>
    </div>
  </div>
)

export default Blog