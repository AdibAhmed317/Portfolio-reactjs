import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  return (
    <div>
      <Link className='p-4' to='/'>
        Home
      </Link>
      <Link className='p-4' to='/about'>
        About
      </Link>
      <Link className='p-4' to='/projects'>
        Projects
      </Link>
      <Link className='p-4' to='/contact'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
