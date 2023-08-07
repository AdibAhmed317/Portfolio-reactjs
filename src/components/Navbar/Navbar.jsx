import React from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ toggle }) => {
  return (
    <nav className='bg-black flex justify-between items-center h-16 text-xl font-medium fixed w-full'>
      <Link
        to='#intro'
        smooth={true}
        duration={500}
        offset={-50}
        className='pl-8 font-thin text-2xl lg:text-4xl text-yellow-200 cursor-pointer'>
        Adib Ahmed
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='#fef08a'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden text-white text-lg font-thin'>
        <Link
          to='#intro'
          smooth={true}
          duration={500}
          offset={-50}
          className='p-4 cursor-pointer'>
          Home
        </Link>
        <Link
          to='#about'
          smooth={true}
          duration={500}
          offset={-50}
          className='p-4 cursor-pointer'>
          About
        </Link>
        <Link
          to='#projects'
          smooth={true}
          duration={500}
          offset={-50}
          className='p-4 cursor-pointer'>
          Projects
        </Link>
        <Link
          to='#contact'
          smooth={true}
          duration={500}
          offset={-50}
          className='p-4 cursor-pointer'>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
