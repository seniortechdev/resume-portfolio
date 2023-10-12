import React from 'react';

const About = () => {
  return (
    <div className='py-10 flex flex-col justify-center px-5 items-center gap-5 tablet:px-[8vw] desktop:px-[10vw]'>
        <span
          className='pt-10 text-center underline-offset-4 underline text-3xl text-navPages font-medium font-montserrat'
         >
           ABOUT ME
         </span>
        <section className='text-center pt-5 px-7 text-xl text-navPages font-medium font-poppins'>
          <p className='text-left'>
             Hello there! My name is Godswil, and I am a highly motivated and skilled full-stack web developer
             with a passion for creating innovative and user-friendly solutions.
             I have a Bachelor's degree in Computer Science from The University of Texas at Arlington,
             where I honed my programming skills and learned to embrace challenges with a well-thought-out approach.
          </p>
          <br />
          <b className='underline underline-offset-2 text-2xl font-montserrat'>My Expertise</b>
          <p className='text-left'>
             My expertise lies in building web-based solutions that cater to the evolving needs of modern businesses.
             I have extensive experience in a wide range of technologies, including Typescript, JavaScript, React,
             Ruby on Rails, AWS, GraphQL, and Docker. With these skills, I am capable of creating scalable, secure,
             and high-performance web applications.
          </p>
          <br />
          <b className='underline underline-offset-2 text-2xl font-montserrat'>Professional Journey</b>
          <p className='text-left'>
             I've had the privilege of working with some exceptional companies throughout my career, contributing to
             various projects and making a meaningful impact. At Cryoport, I served as a Ruby on Rails Engineer,
             where I was responsible for building a product item tracking application using JavaScript, React, and Rails.
             Additionally, I implemented robust testing suites, optimized database queries,
             and integrated third-party APIs to enhance the application's functionality.
             During my time at Amazon, I worked as a Full Stack/Ruby on Rails Engineer, where I had the opportunity to develop
             diverse web applications using modern technologies like Typescript, React, Vue, Node, and GraphQL.
             My experience also involved mentoring and leading a team of junior engineers and actively participating
             in code reviews to maintain high code quality and foster a culture of collaboration.
             I further enriched my skills as a Software Engineer at eBay, where I built stable and maintainable codebases using React,
             Ruby on Rails, and Node. I also played a pivotal role in transitioning the team from a waterfall to an Agile methodology,
             optimizing front-end performance, and integrating internationalization and localization features into web applications.
             As a freelance developer on Upwork, I worked closely with clients to understand their requirements and deliver custom React
             and JavaScript solutions that exceeded expectations. I leveraged my expertise in Redux, SSR, and TDD to create robust
             applications with seamless user interactions.
          </p>
          <br />
          <b className='underline underline-offset-2 text-2xl font-montserrat'>My Approach</b>
          <p className='text-left'>
             I take pride in my ability to work both independently and as part of a team, always striving to communicate clearly
             and effectively. Attention to detail is crucial to me, and I ensure that I follow complex instructions diligently
             while managing my time effectively to meet tight deadlines. I am always willing to go the extra mile to ensure that
             projects are completed with utmost precision and success.
          </p>
          <br />
          <b className='underline underline-offset-2 text-2xl font-montserrat'>Continued Growth</b>
          <p className='text-left'>
             In this ever-changing world of technology, I understand the importance of continuous learning and staying up-to-date
             with the latest industry trends and best practices. I actively seek out opportunities to expand my knowledge and skills,
             which ultimately benefits the projects I work on and contributes to my personal growth as a developer.
          </p>
          <br />
          <b className='underline underline-offset-2 text-2xl font-montserrat'>Get in Touch</b>
          <p className='text-left'>
             I am excited about the opportunity to connect with like-minded individuals and potential collaborators.
             Feel free to reach out to me at gonwuchekwa3@gmail.com or connect with me on LinkedIn or GitHub.
             Let's create something amazing together!
          </p>
          <br />
          <p className='text-left'>
            Thank you for visiting my portfolio web app, and I look forward to discussing potential projects and ideas with you soon!
          </p>
        </section>
        <section className='border-t-2 w-full flex justify-center items-center py-10'>
           <a 
             href="/GodsWilOnwuchekwaResumeUpdated.v3.pdf"
             download="Godswil Onwuchekwa CV"
             className='btn btn-outline btn-success'
            >
               Download CV
           </a>
        </section>
    </div>
  )
}

export default About;