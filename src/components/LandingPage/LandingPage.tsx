import React from 'react';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';
import { IconContext } from 'react-icons';

const LandingPage = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-m pt-10 px-5 tablet:px-[12vw] desktop:px-[15vw]'>
        <span className='text-5xl pt-[20vh] self-start font-bold font-poppins text-navPages'
          role="text"
        >
        Welcome.
        <br />
        Glad you to see you!</span>
        <p className='text-3xl pt-5 text-navPages font-normal font-poppins'
          data-testid="welcome-paragraph"
        >
          I’m a software developer! I can help you build a product,
          feature or website. Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don’t hesitate to contact me.
        </p>
        <span className='py-3 self-start text-secondBlue font-medium'>
          LET'S CONNECT
        </span>
        <IconContext.Provider value={{
          size: '2em',
          className: 'global-class-name home-sm-icons',
        }}
        >
        <ul className="flex flex-row self-start gap-4">
          <li>
            <a href="https://github.com/seniortechdev" target="_blank" rel="noopener noreferrer" data-testid="github-icon">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/godswill-o-221730257/" target="_blank" rel="noopener noreferrer" data-testid="linkedin-icon">
              <FaLinkedinIn />
            </a>
          </li>
      </ul>
    </IconContext.Provider>
    </div>
  )
}

export default LandingPage;