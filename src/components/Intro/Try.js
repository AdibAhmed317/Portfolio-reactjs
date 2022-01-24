import React from 'react';
import { Link } from 'react-router-dom';

import info from '../../images/info.png';

const Try = () => {
  return (
    <>
      <div className='mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 h-screen '>
          <div class='max-h-screen md:h-screen justify-center items-center flex bg-yellow-200 pb-2'>
            <img
              class='w-auto h-auto object-center border-2 border-gray-800 rounded-3xl'
              src={info}
              alt=''
            />
          </div>
          <div class='flex p-10 bg-gray-800 font-sans'>
            <div class='mb-auto mt-auto max-w-lg'>
              <h1 class='text-3xl uppercase text-yellow-200'>Adib Ahmed</h1>
              <p class='font-mono mb-5 text-yellow-200'>
                Web && Mobile App Developer
              </p>
              <p className='text-yellow-200 font-roboto'>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede.
              </p>
              <button class='bg-yellow-300 rounded-md py-3 px-7 mt-6 text-gray-800 font-semibold p-0 m-0'>
                <Link className='p-12' to='/contact'>
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

export default Try;
/* <div class='mx-auto bg-gray-800'>
  <div class='grid grid-cols-1 md:grid-cols-2 h-screen bg-red-50'>
    <div class='max-h-96 md:h-screen justify-center items-center flex'>
      <img
        class='w-auto h-auto object-cover object-top'
        src={info}
        alt=''
      />
    </div>
    <div class='flex p-10'>
      <div class='mb-auto mt-auto max-w-lg'>
        <h1 class='text-3xl uppercase'>Jun Santilla</h1>
        <p class='font-semibold mb-5'>Web Developer</p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
          odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
          turpis. Suspendisse urna nibh, viverra non, semper suscipit,
          posuere a, pede.
        </p>
        <button class='bg-black rounded-md py-3 px-7 mt-6 text-white'>
          Email Me
        </button>
      </div>
    </div>
  </div>
</div> */

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

// {
/* <header className='max-h-full bg-white p-6 flex'>
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
</header> */
// }
