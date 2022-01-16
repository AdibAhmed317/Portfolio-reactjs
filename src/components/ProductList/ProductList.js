import React from 'react';

import Product from '../Product/Product';
import { projects } from '../../data';
import './ProductList.css';

const ProductList = () => {
  return (
    <div className='pl'>
      <div className='pl-texts'>
        <h1 className='pl-title'>Create & Inspire, It's Adib.</h1>
        <p className='pl-desc'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro
          incidunt voluptate eius cupiditate! Recusandae animi non nostrum ut
          quia!
        </p>
      </div>
      <div className='pl-list'>
        {projects.map(item => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
