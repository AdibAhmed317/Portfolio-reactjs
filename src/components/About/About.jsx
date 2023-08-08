import React from 'react';
import about from '../../assets/images/about.jpg';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div
      id='#about'
      className='flex flex-col md:flex-row bg-black justify-center items-center text-center lg:text-left h-auto lg:h-screen'>
      <div className='flex-1 flex justify-center items-center'>
        <div className='mb-auto md:mt-auto lg:mt-auto mt-10 max-w-lg p-10'>
          <h1 className='text-5xl uppercase text-yellow-200 pb-1'>About Me</h1>
          <p className='font-semibold mb-5 text-white font-sans text-3xl'>
            Full Stack Web Developer
          </p>
          <p className='text-white'>
            Welcome to my website my name is Adib Ahmed. I am a recent Computer
            Science graduate who is highly motivated and pays great attention to
            detail. My passion lies in web development, and I am excited to
            utilize my knowledge and skills to design captivating and
            user-friendly websites. I am actively seeking a stimulating role as
            a web developer, where I can contribute to the progress and
            achievements of a forward-thinking organization.
          </p>
          <button className='bg-transparent rounded-md py-3 px-7 mt-6 text-white border-2 border-yellow-200 hover:bg-yellow-200 hover:text-black'>
            <Link
              to='#contact'
              smooth={true}
              duration={500}
              offset={-50}
              className='p-4 cursor-pointer'>
              Email Me
            </Link>
          </button>
        </div>
      </div>
      <div className='h-full flex-1'>
        <img className='h-full' src={about} />
      </div>
    </div>
  );
};

export default About;
