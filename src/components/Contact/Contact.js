import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';
import info from '../../images/info.png';

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = e => {
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
    <div className='h-full bg-gray-800 px-12 py-16 pb-9'>
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
  );
};

export default Contact;
