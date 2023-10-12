import React, { useState } from 'react';
import { Spiral as Hamburger } from 'hamburger-react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div 
      className='bg-primary fixed left-0 right-0 flex flex-row justify-between items-center px-5 py-3 tablet:px-[8vw] desktop:py-5 desktop:px-[10vw] border-b-2 border-b-line-t w-full z-10'
    >
        <NavLink to="/"
         onClick={() => setOpen(false)}
         className="text-logoColor font-montserrat font-semiBold"
        >
          GODSWIL ONWUCHUKWA
        </NavLink>
        <span className='desktop:hidden'>
          <Hamburger
            direction="right"
            easing="ease-in"
            label="Show menu"
            distance="lg"
            toggled={open}
            size={20}
            toggle={setOpen}
            color="#484848"
          />
          {open && (
            <ul className='flex flex-col gap-2 fixed top-[8.5vh] border-2 rounded-md py-2 px-4 right-0 h-full bg-primary'
             aria-label="list"
             onClick={() => setOpen(false)}
            >
                <li>
                  <NavLink to="/experiences"
                    className="text-navPages font-poppins font-medium"
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/skills"
                    className="text-navPages font-poppins font-medium"
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about"
                    className="text-navPages font-poppins font-medium"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact"
                    className="text-navPages font-poppins font-medium"
                  >
                    Contact
                  </NavLink>
                </li>
            </ul>
          )}
        </span>
        <ul className='hidden desktop:flex flex-row gap-2 cursor-pointer items-center'
          role="list"
        >
            <li className='border-r-2 pr-2'>
              <NavLink to="/experiences"
                className="text-navPages font-poppins font-medium"
              >
                Experience
              </NavLink>
            </li>
            <li className='border-r-2 pr-2'>
              <NavLink to="/skills"
                className="text-navPages font-poppins font-medium"
              >
                Skills
              </NavLink>
            </li>
            <li className='border-r-2 pr-2'>
              <NavLink to="/about"
                className="text-navPages font-poppins font-medium"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact"
                className="text-navPages font-poppins font-medium"
              >
                Contact
              </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default NavBar;