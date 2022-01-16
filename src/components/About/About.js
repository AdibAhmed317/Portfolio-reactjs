import React from 'react';
import './about.css';
import info from '../../images/info.png';

const About = () => {
  return (
    <div className='container'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img src={info} alt='' className='a-img' />
        </div>
      </div>
      <div className='a-right'>
        <div className='description'>
          <h1 className='a-title'>About Me</h1>
          <div className='details'>
            <p className='a-desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              consequuntur error quibusdam saepe, hic dolor repellat
              perspiciatis rem libero modi alias. Saepe, ipsam, corporis quaerat
              vel assumenda blanditiis numquam adipisci quos quo esse
              architecto. Quod, perferendis! Illum cum, accusantium, a hic,
              delectus et quis expedita tempore necessitatibus suscipit
              veritatis sint. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quos, qui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
