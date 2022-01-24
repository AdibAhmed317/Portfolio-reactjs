import React from 'react';

import Product from '../Product/Product';
import { projects } from '../../data';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className='flex flex-col items-center text-center text-gray-800 bg-yellow-200 px-12 py-16'>
      <div className='w-2/3'>
        <h1 className='text-5xl font-bold text-gray-800'>
          Create & Inspire, It's Adib.
        </h1>
        <p className='mt-5 text-2xl font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro
          incidunt voluptate eius cupiditate! Recusandae animi non nostrum ut
          quia!
        </p>
      </div>
      <div className='w-full flex flex-wrap justify-between'>
        {projects.map(item => (
          <Product
            key={item.id}
            img={item.img}
            sourceCode={item.sourceCode}
            demo={item.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
