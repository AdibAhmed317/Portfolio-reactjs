import React from 'react';

import ad from '../../images/ad.png';

const Try = () => {
  return (
    <>
      <header className='max-h-full bg-white p-6 flex'>
        <div className='container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40'>
          <div className='grid justify-center items-center order-1 col-span-1'>
            <img
              className='lg:h-80 md:h-64 h-40 rounded-full'
              src={ad}
              alt='logo'
            />
          </div>
          <div className='mt-8 md:mt-0 lg:justify-end col-span-2'>
            <h1 className='text-4xl text-gray-800 text-center md:text-left font-bold mb-6'>
              Hi, I am Adib Ahmed
              <br /> Full Stack Web Developer
            </h1>
            <p className='text-xl text-gray-800 text-center md:text-left'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400'>
              Learn More
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Try;

//   return
//   <>
//     <div class="h-screen w-full bg-gray-50 flex justify-center items-center flex-col p-2">
//         <div class="text-gray-100 shadow-lg shadow-gray-300 w-full md:w-96 h-52 bg-gradient-to-br from-gray-800 to-gray-400 p-4 rounded relative max-w-[24rem]">
//         <p class="font-bold">Aditya Singh</p>
//         <p class="my-1 text-sm">
//         Frontend, Backend & <br />
//         Devops Engineer.
//         </p>
//         <p class="text-sm">xxxxxxxx@xxxxx.com</p>
//         <span class="text-lg font-extrabold absolute right-4 bottom-4">BRAND</span>
//     </div>

//     <div class="shadow-lg shadow-purple-200 p-4 w-full md:w-96 h-52 rounded bg-gradient-to-bl from-purple-300 to-blue-900 flex flex-col justify-center items-center mt-4 max-w-[24rem]">
//     <img class="w-20 h-20 object-cover rounded-full mb-2" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="logo">
//     <p class="text-gray-100 font-semibold">Aditya Singh</p>
//     </div>
//   </>;
//
