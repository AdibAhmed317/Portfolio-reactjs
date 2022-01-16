import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './Contact.css';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
import Address from '../../images/address.png';

const Contact = () => {
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
    <div className='contact'>
      <div className='contact-bg'></div>
      <div className='contact-wrapper'>
        <div className='contact-left'>
          <div className='contact-title'>Let's Discuss your project</div>
          <div className='contact-info'>
            <div className='contact-info-item'>
              <img src={Phone} alt='' className='contact-icon' />
              Demo Number
            </div>
            <div className='contact-info-item'>
              <img src={Email} alt='' className='contact-icon' />
              Demo Email
            </div>
            <div className='contact-info-item'>
              <img src={Address} alt='' className='contact-icon' />
              Demo Address
            </div>
          </div>
        </div>
        <div className='contact-right'>
          <p className='contact-desc'>
            <b>What's your story?</b>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, officiis.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type='text' placeholder='Name' name='user_name' />
            <input type='text' placeholder='Subject' name='user_subject' />
            <input type='email' placeholder='Email' name='user_email' />
            <textarea rows='5' placeholder='Message' name='message' />
            <button>Submit</button>
          </form>
          {/* <form ref={formRef} onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' name='user_name' />
            <label>Email</label>
            <input type='email' name='user_email' />
            <label>Message</label>
            <textarea name='message' />
            <input type='submit' value='Send' />
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
