import React from 'react';

import ad from '../../images/ad.png';

const Intro = () => {
  return (
    <>
      <header className='max-h-full bg-yellow-200 p-6 grid pb-60 pt-10'>
        <div className='mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40 container'>
          <div className='grid justify-center items-center order-1 col-span-1'>
            <img className='h-72 lg:h-96 rounded-full' src={ad} alt='logo' />
          </div>
          <div className='mt-8 md:mt-0 lg:justify-end col-span-2'>
            <h1 className='text-3xl text-left lg:text-5xl text-gray-800 md:text-left font-bold mb-6'>
              Hi,
              <br /> I am Adib Ahmed
              <br /> Full Stack Web & Mobile App Developer
            </h1>
            <p className='text-xl text-gray-800 text-left md:text-left'>
              Welcome to my website my name is Adib Ahmed. I am a Web & Mobile
              developer with little bit of experience in Unity game engine. If
              you have any project or if you want to make a software for your
              business contact me.Hope that you'll like my work if you don't
              i'll change until you are satisfied.
            </p>
            <button className='block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-yellow-200 font-semibold rounded bg-gray-800'>
              <a
                href='https://www.linkedin.com/in/adib-ahmed-9b08551a0/'
                target='_blank'
                rel='noreferrer'
              >
                Learn More
              </a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Intro;

//     <div className='intro-container'>
//       <div className='intro-left'>
//         <div className='left-wrapper'>
//           <h2 className='left-intro'>Hi, I'm </h2>
//           <h1 className='left-name'>Adib Ahmed</h1>
//           <div className='intro-title'>
//             <div className='i-title-wrapper'>
//               <div className='title-item'>Full Stack Web Developer</div>
//               <div className='title-item'>Mobile App Developer</div>
//               <div className='title-item'>Game Developer</div>
//             </div>
//           </div>
//           <div className='intro-desc'>
//             <p>
//               Welcome to my website my name is Adib Ahmed. I am a Web & Mobile
//               developer with little bit of experience in Unity game engine. If
//               you have any project or if you want to make a software for your
//               business contact me.Hope that you'll like my work if you don't
//               i'll change until you are satisfied.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className='intro-right'>
//         <div className='i-bg'></div>
//         <img src={ad} alt='' className='i-img' />
//       </div>
//     </div>
// };
