import React from 'react';

const Notice = () => {
  return (
    <section className='bg-yellow-100 h-10 flex justify-center items-center'>
      <h1 className='font-mono'>
        Please check out my new portfolio.{' '}
        <a
          href='https://adibahmed.vercel.app'
          target='_blank'
          className='text-blue-700'>
          Link
        </a>
      </h1>
    </section>
  );
};

export default Notice;
