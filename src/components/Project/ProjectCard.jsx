import React from 'react';

const ProjectCard = ({ img, title, technology, sourceCode, demo }) => {
  return (
    <div className='border-yellow-200 border-b-[1px] rounded-xl m-10 w-64'>
      <div>
        <img className='h-52 rounded-t-xl' src={img} />
      </div>
      <div className='text-white'>
        <h1 className='text-2xl font-extralight text-start text-yellow-100 my-2'>
          {title}
        </h1>
        <p className='text-start mb-2 h-36'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem iure
          eaque repellat animi ratione et cum accusantium! Nemo, accusamus
          suscipit.
        </p>
        <section className='text-start font-thin h-10'>
          <h1>
            <b className='text-yellow-100'>Technology: </b> {technology}
          </h1>
        </section>
        <div className='pt-5 py-4 flex justify-between'>
          <a
            target='_blank'
            className='mx-2 border-[1px] p-2 border-yellow-200 hover:bg-yellow-200 hover:text-black rounded-xl'
            href={demo}>
            Live Demo
          </a>
          <a
            target='_blank'
            className='mx-2 border-[1px] p-2 border-yellow-200 hover:bg-yellow-200 hover:text-black rounded-xl'
            href={sourceCode}>
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
