import React from 'react';

const Skill = ({ logo, skill }) => {
  return (
    <div className='flex flex-col justify-center items-center mt-1'>
      <div className='p-8 pb-4'>
        <img className='h-12 w-12' src={logo} alt={skill} />
      </div>
      <div>
        <h1 className='font-thin text-sm'>{skill}</h1>
      </div>
    </div>
  );
};

export default Skill;
