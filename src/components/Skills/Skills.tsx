import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import { IconContext } from 'react-icons';
import { BsPatchCheck } from 'react-icons/bs';

const Skills = () => {
  const skills = useSelector((state: RootState) => state.skills);
  
  return (
    <div className='py-20 flex flex-col gap-5 px-5 items-center desktop:px-[10vw]'>
        <h1 className='text-5xl text-center'>Skills</h1>
        <section className='flex flex-col gap-4 desktop:flex-wrap justify-center items-center'>
          {skills.map( skill => (
              <div key={skill.id} className='border-2 flex flex-col justify-center items-center p-5 rounded-lg tablet:max-w-rouselMin desktop:max-w-mid'>
                <span className='text-3xl py-5 text-center'>{skill.title}</span>
                 <table>
                   <tbody className='grid grid-cols-2 gap-5'>
                    {skill.skillArray.map((subSkill, index) => (
                    <tr key={index} className='flex flex-row items-center justify-center px-20 tablet:px-[15vw] desktop:px-[10vw]'>
                      <td>
                      <IconContext.Provider value={{ size: '1.5em', className: 'global-class-name' }}>
                         <BsPatchCheck />
                      </IconContext.Provider>
                      </td>
                      <td className='flex flex-col'>
                        <span className='text-xl'>
                          {subSkill.skill}
                        </span>
                        <span className='text-sm'>
                          {subSkill.level}
                        </span>
                      </td>
                    </tr>
                    ))}
                   </tbody>
                 </table>
              </div>
            )
          )
          }
        </section>
    </div>
  )
};

export default Skills;