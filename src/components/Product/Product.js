import React from 'react';
import './Product.css';

const Product = ({ img, sourceCode, demo }) => {
  return (
    <div className='w-3/12 h-2/5 justify-center items-center flex flex-col rounded-2xl py-3 border-2 border-gray-800 m-4'>
      <img src={img} alt='' className='w-10/12' />
      <br />
      <div className=''>
        <a
          href={sourceCode}
          className='text-2xl text-gray-800 px-4 hover:bg-gray-800 rounded-3xl hover:text-yellow-200'
          target='_blank'
          rel='noreferrer'
        >
          Source Code
        </a>
        <a
          href={demo}
          className='text-2xl text-gray-800 px-4 hover:bg-gray-800 rounded-3xl hover:text-yellow-200'
          target='_blank'
          rel='noreferrer'
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Product;
