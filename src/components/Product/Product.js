import React from 'react';
import './Product.css';

const Product = ({ img, link }) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
      <a href={link} target='_blank' rel='noreferrer'>
        <img src={img} alt='' className='p-img' />
        <h1>Project Title</h1>
      </a>
    </div>
  );
};

export default Product;
