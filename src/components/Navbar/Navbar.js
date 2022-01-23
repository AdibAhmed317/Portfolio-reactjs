import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-yellow-400 flex justify-between items-center h-16 text-black text-xl font-medium'>
      <Link to='/' className='pl-8 font-normal text-4xl'>
        Adib's Paradise
      </Link>
      <div className='px-4 cursor-pointer md:hidden'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden font-serif'>
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
    </nav>
  );
};

export default Navbar;
