import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/configureStore';
import ModalPop from './ModalPop';
import { ExperienceData } from '../../redux/experience/types';
import Select from 'react-select';

const Experience = () => {
  const experiences = useSelector((state: RootState) => state.experiences);
  const [showModal, setShowModal] = useState(false);
  const [employment, setSelectedEmployment] = useState<ExperienceData | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>("");

  // Use a Set to ensure unique values
  const uniqueOptionsVal = new Set<string>();

  // Extract searchStack and add them to Set
  experiences.forEach((exp) => {
    exp.searchStack.forEach((stack) => {
      uniqueOptionsVal.add(stack);
    });
  });

  const handleModalPop = (selectedEmployment: ExperienceData) => {
    setShowModal(true);
    setSelectedEmployment(selectedEmployment)
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedEmployment(null);
  };

  // Convert uniqueOptionsVal Set to an array
  const optionsVal = Array.from(uniqueOptionsVal);

  // Construct options array from optionsVal
  const options = [
    { value: '', label: 'All' },
    ...optionsVal.map((stack) => ({ value: stack, label: stack })),
  ];

  const filteredExperiences = experiences.filter((exp: { searchStack: string[]}) => {
    if (selectedOption === "") {
      return true;
    } else {
      return exp.searchStack.includes(selectedOption)
    }
  });

  const handleSelectChange = (e: any) => {
    setSelectedOption(e.value);
  };

  return (
    <div className='py-20 px-5 flex flex-col gap-10 tablet:px-[8vw] desktop:px-[12vw]'>
       <p className='desktop:text-2xl text-navPages font-medium font-poppins'>
          My expertise lies in programming and implementing web-based solutions that
          meet the evolving needs of modern businesses. I have over 8 years of experience in a wide range of technologies,
          including Typescript, JavaScript, React, Ruby on Rails, AWS, GraphQL, and Docker.
          I am passionate about using technology to improve people's lives and am constantly seeking
          new ways to leverage emerging tools and frameworks to create innovative solutions.
          Below are companies I have worked with.
       </p>
       <section className='flex flex-row gap-5 justify-center items-center tablet:px-10 desktop:px-0'>
        <ul className='inline-flex flex-row flex-wrap text-navPages font-normal font-poppins'>
          <li className='pr-1'>Sort by</li>
          <li>stack / language / tool:</li>
        </ul>
        <Select
            options={options}
            defaultValue={[options[0]]}
            className='shadow-lg shadow-indigo-500/40  w-[50vw] tablet:w-[70vw] desktop:w-[28vw] text-navPages font-normal font-poppins'
            onChange={handleSelectChange}
        />
       </section>
       <section className='flex flex-col gap-5 tablet:px-[15vw] desktop:flex-row flex-wrap'>
          {filteredExperiences.map((experience) => (
            <div key={experience.id}
              className=' shadow-lg shadow-indigo-500/40 border-2 flex flex-col items-center gap-2 justify-center px-5 rounded-md py-5 desktop:w-[22vw] text-navPages font-medium font-poppins'
            >
              <span className='text-xl tablet:text-3xl'>{experience.companyName.toUpperCase()},
                <i className='text-sm tablet:text-lg'>Remote</i>
              </span>
              <ul className='flex flex-row gap-2 items-center justify-center border-b-2 tablet:text-xl desktop:text-xs'>
                <li>{experience.employmentSpan[0].toUpperCase()}</li>
                <li> - </li>
                <li>{experience.employmentSpan[1].toUpperCase()}</li>
              </ul>
              <span className='underline tablet:text-xl text-center'>{experience.employmentStack}</span>
              <p>{experience.projectBrief[0].slice(0, 300)}...</p>
              <button type='button'
                className='btn self-end text-navPages font-normal font-poppins btn-outline btn-secondary'
                onClick={() => handleModalPop(experience)}
              >
                View more 
              </button>
            </div>
          ))}
          {showModal && <ModalPop selectedEmployment={employment} handleModalClose={handleModalClose} />}
       </section>
    </div>
  )
}

export default Experience;