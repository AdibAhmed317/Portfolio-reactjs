import React from 'react';
import { projects } from '../../assets/data/projectData';
import ProjectCard from './ProjectCard';

const ProjectList = () => {
  return (
    <div
      id='#projects'
      className='flex flex-col justify-center items-center lg:text-center bg-black px-12 py-16'>
      <div className='w-2/3'>
        <h1 className='text-4xl lg:text-5xl font-thin text-yellow-200'>
          Create & Inspire!
        </h1>
        <p className='mt-5 text-xl lg:text-2xl font-mono text-white'>
          Here are some projects that I've completed over the time.
        </p>
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 h-auto mt-5 md:mt-10 -ml-3 lg:-ml-0'>
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            img={item.img}
            sourceCode={item.sourceCode}
            demo={item.demo}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
