import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import info from '../../images/info.png';

const Try = () => {
  const formRef = useRef();

  const handleSubmit = e => {
    // e.preventDefault();

    emailjs
      .sendForm(
        'service_fohvwed',
        'template_kub0jsd',
        formRef.current,
        'user_gRp7XFLYX5L8MoREOkNrl'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className='h-screen bg-gray-800 px-12 py-16 pb-9'>
        <h1 className='text-5xl font-extralight text-yellow-200 text-center'>
          Lets discuss your project
        </h1>
        <div className='flex flex-row h-screen'>
          <div className='flex h-3/4 justify-center w-2/4'>
            <img src={info} alt='' />
          </div>
          <div className='w-2/4 justify-center items-center mt-36'>
            <p className='contact-desc text-yellow-200 text-3xl'>
              <b className='font-extrabold'>What's your story?</b>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, officiis.
            </p>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4'
            >
              <input
                className='bg-blue-200'
                type='text'
                placeholder='Name'
                name='user_name'
              />
              <br />
              <input
                className='bg-blue-200'
                type='text'
                placeholder='Subject'
                name='user_subject'
              />
              <br />
              <input
                className='bg-blue-200'
                type='email'
                placeholder='Email'
                name='user_email'
              />
              <textarea
                className='bg-blue-200'
                rows='5'
                placeholder='Message'
                name='message'
              />
              <button onClick={handleSubmit}>
                <h1 className='bg-yellow-200 p-4'>Send</h1>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Try;

// {/* <div className='w-3/12 h-2/5 justify-center items-center flex flex-col rounded-2xl py-3 border-2 border-gray-800'>
//   <img src={about} alt='' className='w-10/12' />
//   <br />
//   <div className=''>
//     <a
//       href='https://google.com'
//       className='text-2xl text-gray-800 px-4 hover:bg-gray-800 rounded-3xl hover:text-yellow-200'
//     >
//       Source Code
//     </a>
//     <a
//       href='https://google.com'
//       className='text-2xl text-gray-800 px-4 hover:bg-gray-800 rounded-3xl hover:text-yellow-200'
//     >
//       Live Demo
//     </a>
//   </div>
// </div> */

// /* <div class='mx-auto bg-gray-800'>
// <div class='grid grid-cols-1 md:grid-cols-2 h-screen bg-red-50'>
// <div class='max-h-96 md:h-screen justify-center items-center flex'>
//       <img
//         class='w-auto h-auto object-cover object-top'
//         src={info}
//         alt=''
//       />
//     </div>
//     <div class='flex p-10'>
//       <div class='mb-auto mt-auto max-w-lg'>
//         <h1 class='text-3xl uppercase'>Jun Santilla</h1>
//         <p class='font-semibold mb-5'>Web Developer</p>
//         <p>
//           Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
//           odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
//           turpis. Suspendisse urna nibh, viverra non, semper suscipit,
//           posuere a, pede.
//         </p>
//         <button class='bg-black rounded-md py-3 px-7 mt-6 text-white'>
//           Email Me
//         </button>
//       </div>
//     </div>
//   </div>
// </div> */

// //   return
// //   <>
// //     <div class="h-screen w-full bg-gray-50 flex justify-center items-center flex-col p-2">
// //         <div class="text-gray-100 shadow-lg shadow-gray-300 w-full md:w-96 h-52 bg-gradient-to-br from-gray-800 to-gray-400 p-4 rounded relative max-w-[24rem]">
// //         <p class="font-bold">Aditya Singh</p>
// //         <p class="my-1 text-sm">
// //         Frontend, Backend & <br />
// //         Devops Engineer.
// //         </p>
// //         <p class="text-sm">xxxxxxxx@xxxxx.com</p>
// //         <span class="text-lg font-extrabold absolute right-4 bottom-4">BRAND</span>
// //     </div>

// //     <div class="shadow-lg shadow-purple-200 p-4 w-full md:w-96 h-52 rounded bg-gradient-to-bl from-purple-300 to-blue-900 flex flex-col justify-center items-center mt-4 max-w-[24rem]">
// //     <img class="w-20 h-20 object-cover rounded-full mb-2" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="logo">
// //     <p class="text-gray-100 font-semibold">Aditya Singh</p>
// //     </div>
// //   </>;
// //

// // {
// /* <header className='max-h-full bg-white p-6 flex'>
// <div className='container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40'>
//   <div className='grid justify-center items-center order-1 col-span-1'>
//     <img
//       className='lg:h-80 md:h-64 h-40 rounded-full'
//       src={ad}
//       alt='logo'
//     />
//   </div>
//   <div className='mt-8 md:mt-0 lg:justify-end col-span-2'>
//     <h1 className='text-4xl text-gray-800 text-center md:text-left font-bold mb-6'>
//       Hi, I am Adib Ahmed
//       <br /> Full Stack Web Developer
//     </h1>
//     <p className='text-xl text-gray-800 text-center md:text-left'>
//       Amet minim mollit non deserunt ullamco est sit aliqua dolor do
//       amet sint. Velit officia consequat duis enim velit mollit.
//       Exercitation veniam consequat sunt nostrud amet.
//     </p>
//     <button className='block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400'>
//       Learn More
//     </button>
//   </div>
// </div>

// <div className='h-screen bg-yellow-200'>
//   {/* <div className='contact-bg'></div> */}
//   <div className='p-14 flex flex-row'>
//     <div className='contact-left'>
//       <div className='contact-title'>Let's Discuss your project</div>
//       <div className='contact-info'>
//         <div className='contact-info-item'>
//           <img src={info} alt='' className='contact-icon' />
//           Demo Number
//         </div>
//         <div className='contact-info-item'>
//           <img src={Email} alt='' className='contact-icon' />
//           Demo Email
//         </div>
//         <div className='contact-info-item'>
//           <img src={Address} alt='' className='contact-icon' />
//           Demo Address
//         </div>
//       </div>
//     </div>
//     <div className='contact-right'>
//       <p className='contact-desc'>
//         <b>What's your story?</b>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Repudiandae, officiis.
//       </p>
//       <form ref={formRef} onSubmit={handleSubmit}>
//         <input type='text' placeholder='Name' name='user_name' />
//         <input type='text' placeholder='Subject' name='user_subject' />
//         <input type='email' placeholder='Email' name='user_email' />
//         <textarea rows='5' placeholder='Message' name='message' />
//         <button>Submit</button>
//       </form>
//     </div>
//   </div>
// </div>
