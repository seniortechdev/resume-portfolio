import React from 'react';
import { FaGithub, FaReact } from 'react-icons/fa';
import { SiRubyonrails } from 'react-icons/si';
import { IconContext } from 'react-icons';

const Services = () => {
  return (
    <div className='pt-20 flex flex-col items-center justify-center px-5 bg-black'>
    <IconContext.Provider value={{
      size: '2em',
      className: 'global-class-name home-sm-icons',
    }}
    >
      <section className='border-2 max-w-rouselMin flex flex-col'>
          <FaReact />
          <span>FrontEnd</span>
      </section>
      <section className='border-2 min-w-rouselMin flex flex-col'>
          <SiRubyonrails />
          <span>BackEnd</span>
      </section>
      <section className='border-2 min-w-rouselMin flex flex-col'>
          <FaGithub />
          <span>Project Manager</span>
      </section>
    </IconContext.Provider>
</div>
  );
};

export default Services;