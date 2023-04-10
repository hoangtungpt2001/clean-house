import React, { useState } from 'react';
import {Container} from "@mui/material";
import Layout from '../components/layout/Layout';

const NewExperience = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Category:', category);
  };
 
  return (
    <Layout>
        <Container maxWidth="lg" >
             <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" value={content} onChange={handleContentChange} />
      </div>
      <div>
        <label htmlFor="category">Category:</label>
        <input type="text" id="category" value={category} onChange={handleCategoryChange} />
      </div>
      <button type="submit">Create Post</button>
    </form>
        </Container>
      
       
    </Layout>
  )
}

export default NewExperience