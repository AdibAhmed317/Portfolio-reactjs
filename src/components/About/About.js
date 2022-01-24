import React from 'react';
import './about.css';
import about from '../../images/about.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div class='mx-auto'>
        <div class='grid grid-cols-1 md:grid-cols-2 h-screen'>
          <div class='max-h-96 md:h-screen'>
            <img class='w-screen h-screen object-cover' src={about} alt='' />
          </div>
          <div class='flex bg-gray-800 p-10'>
            <div class='mb-auto mt-auto max-w-lg'>
              <h1 class='text-4xl uppercase text-yellow-200 pb-1'>About Me</h1>
              <p class='font-semibold mb-5 text-yellow-200 font-sans text-3xl'>
                Web & Mobile App Developer
              </p>
              <p className='text-yellow-200'>
                Welcome to my website my name is Adib Ahmed. I am a Web & Mobile
                developer with little bit of experience in Unity game engine. If
                you have any project or if you want to make a software for your
                business contact me.Hope that you'll like my work if you don't
                i'll change until you are satisfied.
              </p>
              <button class='bg-yellow-300 rounded-md py-3 px-7 mt-6 text-gray-800'>
                <Link className='p-10' to='/contact'>
                  Email Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
