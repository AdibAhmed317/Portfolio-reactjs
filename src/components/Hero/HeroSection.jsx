import React from 'react';

import fb from '../../assets/images/Social/facebook.png';
import gh from '../../assets/images/Social/github.png';
import ing from '../../assets/images/Social/instagram.png';
import linkedin from '../../assets/images/Social/linkedin.png';
import ad from '../../assets/images/githubdp.jpg';

const HeroSection = () => {
  return (
    <div id='#intro' className='bg-black flex flex-col md:flex-row font-thin'>
      <div className='bg-black flex-1'>
        <div>
          <img className='h-auto md:h-auto w-full' src={ad} />
        </div>
      </div>
      <div className='flex-1 flex items-center justify-center m-10 md:m-20 text-center md:text-left lg:text-left '>
        <div className='flex flex-col justify-center items-center md:items-start'>
          <h1 className='text-2xl lg:text-5xl text-white mb-6'>
            <section className='text-yellow-200'>Hi,</section>
            <section>I am Adib Ahmed</section>
            <section>Full Stack Web Developer</section>
          </h1>
          <div className='flex'>
            <a
              className='m-1'
              href='https://www.facebook.com/Adib.Ahmed317/'
              target='_blank'
              rel='noreferrer'>
              <img className='h-10 w-10 md:h-12 md:w-12' src={fb} />
            </a>
            <a
              className='m-1'
              href='https://github.com/AdibAhmed317'
              target='_blank'
              rel='noreferrer'>
              <img className='h-10 w-10 md:h-12 md:w-12' src={gh} />
            </a>
            <a
              className='m-1'
              href='https://www.instagram.com/__adib.ahmed__/'
              target='_blank'
              rel='noreferrer'>
              <img className='h-10 w-10 md:h-12 md:w-12' src={ing} />
            </a>
            <a
              className='m-1'
              href='https://www.linkedin.com/in/adib-ahmed/'
              target='_blank'
              rel='noreferrer'>
              <img className='h-10 w-10 md:h-12 md:w-12' src={linkedin} />
            </a>
          </div>
          <section className='mt-5 lg:mt-8 w-32 text-base py-3 px-6 text-white rounded bg-transparent border-yellow-200 border-2 hover:bg-yellow-200 hover:text-black font-mono text-center'>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1l9vw7ugjS6UWW0YELIab-BXQLfOjvqrQ/view?usp=sharing'>
              Resume
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
