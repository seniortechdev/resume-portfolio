import React from 'react';
import { ExperienceData } from '../../redux/experience/types';

interface ModalProps {
  handleModalClose : () => void,
  selectedEmployment: ExperienceData | null,
}

const ModalPop = ( { handleModalClose, selectedEmployment }: ModalProps ) => {

  return (
    <div className='fixed left-0 right-0 top-0 z-40 bg-sky-500/50 h-full p-2 flex flex-col items-center'>
      <section className='bg-sky-500/100 p-2 flex flex-col min-w-home-image items-center'>
        <button 
         type="button" onClick={() => handleModalClose()}
         className='btn glass w-full text-primary font-medium font-poppins'
         >
            Close
        </button>
        <div className='modal-box flex flex-col items-center w-full desktop:max-w-none desktop:px-10'>
          <span className='py-2 text-2xl tablet:text-5xl font-bold font-montserrat text-navPages'>
            {selectedEmployment?.companyName.toUpperCase()}, <i className='text-sm tablet:text-2xl font-medium font-poppins'>
              Remote
            </i>
          </span>
          <ul className='flex flex-row gap-2 items-center justify-center border-b-2 tablet:text-2xl text-navPages font-medium font-poppins'>
            <li>
              <span>{selectedEmployment?.employmentSpan[0]}</span>
            </li>
            <li> - </li>
            <li>
              <span>{selectedEmployment?.employmentSpan[1]}</span>
            </li>
          </ul>
          <span className='underline py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment?.employmentStack}</span>
          {selectedEmployment?.projectBrief[0] && (
            <p className='py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment.projectBrief[0]}</p>
          )}
          {selectedEmployment?.projectBrief[1] && (
            <p className='py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment.projectBrief[1]}</p>
          )}
          {selectedEmployment?.projectBrief[2] && (
            <p className='py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment.projectBrief[2]}</p>
          )}
          {selectedEmployment?.projectBrief[3] && (
            <p className='py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment.projectBrief[3]}</p>
          )}
          {selectedEmployment?.projectBrief[4] && (
            <p className='py-2 tablet:text-2xl font-medium font-poppins text-navPages'>{selectedEmployment.projectBrief[4]}</p>
          )}
          <section className='py-3 flex flex-col gap-4'>
            <span className='text-center text-2xl underline underline-offset-4 tablet:text-3xl text-navPages font-bold font-montserrat'>SOME OF THE TASKS I PERFORMED ARE:</span>
            <ol className='list-disc tablet:text-2xl text-navPages font-medium font-poppins'>
              {selectedEmployment?.implementations.map((implemented, index) => (
                <li key={index} className='py-2'>{implemented}</li>
              ))}
            </ol>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ModalPop;