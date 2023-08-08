import React from 'react';

import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import php from '../../assets/images/php.png';
import ts from '../../assets/images/ts.png';
import react from '../../assets/images/react.png';
import nextjs from '../../assets/images/nextjs.png';
import nestjs from '../../assets/images/nestjs.png';
import exjs from '../../assets/images/exjs.png';
import mongo from '../../assets/images/mongo.png';
import tailwind from '../../assets/images/Tailwind_CSS.png';
import pg from '../../assets/images/pg.png';
import asp from '../../assets/images/asp.png';

import Skill from './Skill';

const SkillSection = () => {
  return (
    <div className='flex flex-col items-center w-full h-full bg-black'>
      <div className='flex items-center mt-6 text-white md:text-4xl font-bold'>
        <h1 className='font-thin text-5xl text-yellow-200'>My Skills</h1>
      </div>
      <div className='grid grid-cols-3 text-center text-base md:text-2xl text-white w-full'>
        <div>
          <Skill skill='HTML' logo={html} />
        </div>
        <div>
          <Skill skill='CSS' logo={css} />
        </div>
        <div>
          <Skill skill='JavaScript' logo={js} />
        </div>
        <div>
          <Skill skill='TypeScript' logo={ts} />
        </div>
        <div>
          <Skill skill='Tailwind CSS' logo={tailwind} />
        </div>
        <div>
          <Skill skill='ReactJS' logo={react} />
        </div>
        <div>
          <Skill skill='NextJS' logo={nextjs} />
        </div>
        <div>
          <Skill skill='ExpressJs' logo={exjs} />
        </div>
        <div>
          <Skill skill='PHP' logo={php} />
        </div>
        <div>
          <Skill skill='NestJS' logo={nestjs} />
        </div>
        <div>
          <Skill skill='MongoDB' logo={mongo} />
        </div>
        <div>
          <Skill skill='PostgreSQL' logo={pg} />
        </div>
        <div>
          <Skill skill='ASP .Net' logo={asp} />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
