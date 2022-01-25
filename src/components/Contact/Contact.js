import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import info from '../../images/info.png';

const Contact = () => {
  const formRef = useRef();

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

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

    setName('');
    setSubject('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='h-full bg-gray-800 px-12 py-16 pb-9'>
      <h1 className='text-3xl text-left lg:text-5xl lg:text-center font-extralight text-yellow-200'>
        Lets discuss your project
      </h1>
      <div className='h-screen grid grid-1 lg:grid-cols-2'>
        <div className='flex h-3/4 justify-center w-4/5'>
          <img src={info} alt='' className='hidden lg:flex' />
        </div>
        <div className='w-full p-0 lg:mt-36'>
          <b className='font-extrabold text-yellow-200 text-lg'>
            What's your story?
          </b>
          <p className='contact-desc text-yellow-200 text-base'>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, officiis.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='bg-blue-200 mt-2 flex flex-wrap lg:mt-5 gap-2'
          >
            <input
              className='bg-blue-200 w-2/4 h-12 my-3 pl-3'
              type='text'
              placeholder='Name'
              name='user_name'
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <br />
            <input
              className='bg-blue-200 w-2/4 h-12 my-3 pl-3'
              type='text'
              placeholder='Subject'
              name='user_subject'
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <br />
            <input
              className='bg-blue-200 w-2/4 h-12 my-3 pl-3'
              type='email'
              placeholder='Email'
              name='user_email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <textarea
              className='bg-blue-200 w-full my-2 pl-3'
              rows='5'
              placeholder='Message'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
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
