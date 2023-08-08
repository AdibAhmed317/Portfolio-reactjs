import React from 'react';

import info from '../../assets/images/info.png';

const Contact = () => {
  return (
    <>
      <h1 className='text-3xl lg:text-4xl font-thin text-center text-yellow-200'>
        Contact Me
      </h1>
      <div
        id='#contact'
        className='h-full bg-black flex flex-col md:flex-row pb-20 md:pb-0 -mt-14'>
        <div id='left' className='flex-1 h-screen'>
          <div className='flex h-full w-full justify-center items-center'>
            <img
              src={info}
              className='justify-center items-center h-auto md:h-96 w-auto md:w-3/4'
            />
          </div>
        </div>
        <div id='right' className='flex-1 h-screen'>
          <div className='flex flex-col h-full w-[70%] justify-center md:items-start ml-14 md:ml-0'>
            <input
              className='bg-gray-400 w-full h-12 pl-3 rounded-lg placeholder:text-black'
              type='text'
              placeholder='Name'
              name='user_name'
            />
            <br />
            <input
              className='bg-gray-400 w-full h-12 pl-3 rounded-lg placeholder:text-black'
              type='text'
              placeholder='Subject'
              name='user_subject'
            />
            <br />
            <input
              className='bg-gray-400 w-full h-12 pl-3 rounded-lg placeholder:text-black'
              type='email'
              placeholder='Email'
              name='user_email'
            />
            <textarea
              className='bg-gray-400 w-full my-5 pl-3 rounded-lg placeholder:text-black'
              rows='5'
              placeholder='Message'
              name='message'
            />
            <button>
              <h1 className='bg-yellow-200 p-4 w-40 rounded-lg hover:bg-gray-400'>
                Send
              </h1>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
