import React from 'react';
import react from '../../assets/images/react.png';

const Skill = () => {
  return (
    <div className='flex flex-col items-center lg:w-1/3 h-full md:mr-4'>
      <div className='flex items-center mt-6 text-white text-3xl md:text-4xl font-bold'>
        <h2>MY STACKS</h2>
      </div>
      <div className='grid grid-cols-3 text-center text-base md:text-2xl font-bold text-yellow-500 m-4 mt-0 lg:m-2 lg:w-full h-fit'>
        <div>
          <Skill skill='HTML' logo={react} />
        </div>
        <div>
          <Skill skill='CSS' logo={react} />
        </div>
        <div>
          <Skill skill='PHP' logo={react} />
        </div>
        <div>
          <Skill skill='JavaScript' logo={react} />
        </div>
        <div>
          <Skill skill='TypeScript' logo={react} />
        </div>
        <div>
          <Skill skill='Tailwind CSS' logo={react} />
        </div>
        <div>
          <Skill skill='ReactJS' logo={react} />
        </div>
        <div>
          <Skill skill='NextJS' logo={react} />
        </div>
        <div>
          <Skill skill='NestJS' logo={react} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
