import React from 'react';
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
        <div className=''>
          <h1 className='text-2xl lg:text-5xl text-white mb-6'>
            Hi,
            <br /> I am Adib Ahmed
            <br /> Full Stack Web & Mobile App Developer
          </h1>
          <button className='mt-2 lg:mt-8 md:mt-8 mx-auto md:mx-0 text-base py-3 px-6 text-white rounded bg-transparent border-yellow-200 border-2 hover:bg-yellow-200 hover:text-black font-mono'>
            <a
              href='https://www.linkedin.com/in/adib-ahmed-9b08551a0/'
              target='_blank'
              rel='noreferrer'>
              Learn More
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
