import React from 'react';
import './intro.css';
import ad from '../../images/ad.png';

const Intro = () => {
  return (
    <div className='intro-container'>
      <div className='intro-left'>
        <div className='left-wrapper'>
          <h2 className='left-intro'>Hi, I'm </h2>
          <h1 className='left-name'>Adib Ahmed</h1>
          <div className='intro-title'>
            <div className='title-wrapper'>
              <div className='title-item'>Full Stack Web Developer</div>
              <div className='title-item'>Mobile App Developer</div>
              <div className='title-item'>Game Developer</div>
            </div>
          </div>
          <div className='intro-desc'>
            <p>
              Welcome to my website my name is Adib Ahmed. I am a Web & Mobile
              developer with little bit of experience in Unity game engine. If
              you have any project or if you want to make a software for your
              business contact me.Hope that you'll like my work if you don't
              i'll change until you are satisfied.
            </p>
          </div>
        </div>
      </div>
      <div className='intro-right'>
        <div className='i-bg'></div>
        <img src={ad} alt='' className='i-img' />
      </div>
    </div>
  );
};

export default Intro;
