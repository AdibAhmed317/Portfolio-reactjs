import React from 'react';
import { Link } from 'react-scroll';

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-black text-white fixed w-full mt-16'
          : 'hidden'
      }
      onClick={toggle}>
      <Link
        to='#intro'
        smooth={true}
        duration={500}
        className='p-4 cursor-pointer'>
        Home
      </Link>
      <Link
        to='#about'
        smooth={true}
        duration={500}
        className='p-4 cursor-pointer'>
        About
      </Link>
      <Link
        to='#projects'
        smooth={true}
        duration={500}
        className='p-4 cursor-pointer'>
        Projects
      </Link>
      <Link
        to='#contact'
        smooth={true}
        duration={500}
        className='p-4 cursor-pointer'>
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
