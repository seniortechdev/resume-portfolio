import { v4 as uuidv4 } from 'uuid';

const defaultState = [
    {
        id: uuidv4(),
        companyName: 'Cryoport',
        employmentSpan: ["January 2021", "May 2023"],
        employmentStack: "Ruby on Rails Engineer",
        searchStack: ["ror", "ruby on rails", "graphql", "GraphQl", "js", "javascript",
                      "aws", "amazon web services", "react"],
        projectBrief: [
          `
          At Cryoport, a prominent pharmaceutical enterprise, the imperative was to devise
          a sophisticated software solution facilitating the seamless transportation of
          pharmaceutical products across international borders. Throughout my tenure at Cryoport,
          I had the privilege of being an integral member of a dynamic team comprised of
          six adept developers. Together, we embarked on the ambitious journey of architecting
          innovative functionalities that resonated with Cryoport's overarching mission –
          expeditiously connecting the right customer with their requisite pharmaceuticals.
          `,
          `
          To execute this mission, our team meticulously constructed a suite of backend shipping
          automation services. Among these solutions, a standout feature was the "Proof of Delivery" mechanism.
          This innovative service offered Cryoport a tangible means to monitor the real-time delivery status of
          their products while also generating conclusive evidence of successful deliveries. Notably,
          this service extended its utility to industry giants such as FedEx and DHL, subsequently enhancing
          their logistical capabilities. Moreover, its potential as an integral component of a comprehensive
          supply chain management system underscored its value proposition within the broader business landscape.
          `
        ],
        implementations: [
        `
          Built a product item tracking application and developed it for a web app using JavaScript, React, Rails,
          GraphQL, AWS, and implemented strong RSpec test suites for comprehensive test coverage.
        `,
        `
          Redesigned and developed the user interface, converting Figma templates into a functional UI using React,
          and wrote corresponding RSpec tests to ensure UI functionality and behavior.
        `,
        `
          Applied mocking and stubbing techniques in RSpec tests to isolate dependencies and ensure focused and
          reliable test execution.
        `,
        `
          Manage the applications technology platform status, project pipeline and development priorities.
        `,
        `
          Reviewed project specifications and design technology solutions that exceeded performance.
        `,
        `
          Collaborated with cross-functional teams, including product managers and designers, to gather
          requirements and deliver high-quality features within tight deadlines.
        `,
        `
          Led code reviews and provided constructive feedback to team members, resulting in improved code
          quality and best practices adherence.
        `,
        `
          Implemented user authentication and authorization features using Devise and CanCanCan,
          ensuring secure access to sensitive data and actions.
        `,
        `
          Optimized database queries and data fetching techniques, leading to significant performance
          improvements and faster response times.
        `,
        `
          Integrated third-party APIs, such as payment gateways and shipping services, to enhance the
          application's functionality and user experience.
        `,
        `
          Conducted A/B tests to analyze user behavior and iteratively improved UI/UX to increase user
          engagement and conversion rates.
        `,
        `
          Resolved complex bugs and issues reported by users, maintaining a high level of responsiveness
          and user satisfaction.
        `,
        `
          Implemented continuous integration and continuous deployment (CI/CD) pipelines using Jenkins and
          GitHub Actions, streamlining the development and deployment processes.
        `,
        `
          Conducted technical interviews and actively participated in the hiring process to build a talented
          and cohesive engineering team.
        `,
        `
          Actively contributed to team knowledge sharing sessions, conducting workshops on new technologies
          and best coding practices.
        `,
        ],
    },
    {
        id: uuidv4(),
        companyName: 'Amazon',
        employmentSpan: ["January 2018 ", "December 2021"],
        employmentStack: "Full Stack / Ruby on Rails Engineer",
        searchStack: ["ror", "ruby on rails", "CSS", "react", "vue", "typescript", "vanilla", "js", "javascript", "ts"],
        projectBrief: [
            `
            As an esteemed e-commerce titan, Amazon's indomitable presence in the industry is unrivaled.
            My tenure at Amazon was marked by my pivotal role within the Amazon Flex team, an instrumental
            force dedicated to engineering pivotal solutions that furthered Amazon's operational prowess.
            In my capacity, I led a team of fellow developers, a role I cherished deeply, as it offered
            the opportunity to both guide and learn from my colleagues.
            This enriching experience underscored the fact that true excellence
            in development extends beyond mere code composition. It involves cultivating a culture of mutual
            respect and collaboration, recognizing the importance of cohesive teamwork.
            `,
            `
            Among our notable undertakings was the development of a sophisticated product pricing feature.
            This initiative entailed intricate processes encompassing meticulous data collection, the formulation
            of advanced Pricing Models, rigorous Evaluation procedures, and a continuous drive for Improvement.
            By leveraging predictive analytics grounded in driver availability forecasts and demand-based algorithms,
            our efforts sought to optimize pricing strategies. This multidimensional endeavor demanded a harmonious
            convergence of technical acumen and strategic thinking, emblematic of our commitment to innovation and
            problem-solving.
            `
        ],
        implementations: [
        `
            Built full-stack web applications using different languages/frameworks using Typescript, React, Vue, Node,
            Ruby on Rails, GraphQL, AWS, Jest. Developed comprehensive test suites using Jest to ensure robust code
            quality and reliability.
        `,
        `
            Developed web applications using Vanilla JavaScript, React, Unistore, and CSS Flexbox, leveraging modern ES6
            features and React hooks for enhanced functionality and maintainability.
        `,
        `
            Designed reusable components using the Ant UI library to create consistent and efficient user interfaces.
        `,
        `
            Maintained a proactive approach to professional development, staying up-to-date with the latest industry trends,
            technologies, and best practices. Actively sought out opportunities to expand knowledge and skills,
            demonstrating a commitment to personal growth and continuous improvement.
        `,
        `
            Built frontend UIs using Typescript, React, Material UI, and SCSS, combining strong type-checking with well-structured
            UI components and styling to deliver polished and visually appealing user experiences.
        `,
        `
            Built frontend UIs using typescript, react, material UI, SCSS.
        `,
        `
            Worked closely with project managers, VP of Engineering and CTO to meet deadlines and ensure the product fulfilled client
            expectations.
        `,
        `
            Lead and coach a team of junior engineers to create an application from scratch to production.
        `,
        `
            Managed multiple code bases simultaneously, handling bug fixes and pushing updates to live production environments.
        `,
        `
            Demonstrated excellent time management and multitasking abilities to deliver reliable and timely solutions.
        `,
        `
            Implemented serverless architecture using AWS Lambda and API Gateway to optimize application scalability and
            reduce operational costs.
        `,
        `
            Integrated third-party analytics tools, such as Google Analytics and Mixpanel, to track user behavior and gather
            insights for data-driven decision making.
        `,
        `
            Developed and maintained RESTful APIs using Node.js and Express.js, enabling seamless communication between
            the frontend and backend systems.
        `,
        `
            Conducted load testing and performance optimization using tools like JMeter and Lighthouse to ensure
            application stability and responsiveness under high user traffic.
        `,
        `
            Spearheaded the migration of legacy codebases to modern frameworks and languages, resulting in
            improved maintainability and performance.
        `,
        `
            Collaborated with cross-functional teams, including product managers and UX designers,
            to define project requirements and user stories, ensuring alignment with business objectives.
        `,
        `
            Implemented accessibility best practices, adhering to WCAG guidelines, to create an inclusive
            user experience for individuals with disabilities.
        `,
        `
            Conducted code refactoring and codebase restructuring to enhance code quality,
            maintainability, and readability.
        `,
        `
            Assisted in the onboarding and training of new team members, fostering a smooth
            transition and efficient integration into the development team.
        `,
        `
            Participated in regular code review sessions, providing constructive feedback
            and suggesting improvements to enhance code quality and team collaboration.
        `,
        `
            Actively contributed to the open-source community, sharing code snippets and
            contributing to relevant projects on GitHub.
        `,
        `
            Collaborated with stakeholders to prioritize and plan feature development,
            resulting in the timely delivery of key milestones and project goals.
        `,
        ],
    },
    {
      id: uuidv4(),
      companyName: 'Ebay',
      employmentSpan: ["October  2016", "December 2017"],
      employmentStack: "Software Engineer",
      searchStack: ["react", "ror", "node", "ruby on rails"],
      projectBrief: [
        `
          During my tenure at eBay, a prominent e-commerce platform facilitating both consumer-to-consumer
          and business-to-consumer transactions, I embarked on a pivotal juncture in my career.
          This engagement marked my transition from freelancing to a formal professional role.
          Entrusted with the title of Software Engineer, my responsibilities encompassed an array of critical tasks,
          with an emphasis on documentation, test script composition, and backend project involvement.
        `,
        `
          An integral facet of my experience at eBay was the invaluable opportunity to collaborate with seasoned
          professionals and benefit from their mentorship. My interaction with senior developers facilitated not only
          the refinement of my technical skills but also a comprehensive understanding of industry standards and best
          practices. Rigorous code reviews were an essential component of this learning process, ensuring that my
          contributions aligned with the highest coding standards and software conventions.
        `,
        `
          This chapter of my career at eBay remains among the most captivating and enriching phases. Each day presented
          an occasion for learning and growth, amplifying my proficiency in diverse facets of software engineering.
          My involvement encompassed not only the sphere of software development but also the cultivation of a meticulous
          approach to documentation, a proficiency in crafting effective tests, and a chance to make meaningful contributions
          to backend projects.
        `,
        `
          In summation, my time at eBay was characterized by an immersive professional journey, wherein I evolved from a
          freelancer to a proactive member of a dynamic software engineering team. The exposure to multifaceted tasks,
          coupled with the privilege of mentorship and collaborative learning, has indelibly contributed to my ongoing
          pursuit of excellence in the realm of software engineering.
        `,
      ],
      implementations: [
        `
          Building stable and maintainable codebases using React, Ruby on Rails, and Node.
        `,
        `
          Applied a mobile-first approach to existing websites, ensuring that the user experience
          was seamless and optimized across different devices and screen sizes. Leveraged responsive
          design techniques and frameworks like Bootstrap or Tailwind CSS to create fluid and adaptable layouts.
        `,
        `
          Implemented comprehensive testing strategies using tools like Jest, RSpec, and Mocha to ensure the stability
          and maintainability of codebases built with React, Ruby on Rails, and Node.
        `,
        `
          Employed testing frameworks to write unit tests, integration tests, and end-to-end tests, covering critical
          functionality and edge cases.
        `,
        `
          Collaborating with designers to ensure designs were efficient and technically sound.
        `,
        `
          Creating modular, responsive templates using modern CSS techniques and JavaScript libraries.
        `,
        `
          Optimized front-end performance through code optimization, caching, and other techniques, resulting
          in faster page load times and improved user experience.
        `,
        `
          Assist with the transition from a U+0077aterfall method to a more efficient Agile methodology.
        `,
        `
          Implemented real-time features using WebSockets and event-driven architecture, enhancing user engagement
          and interactivity on the platform.
        `,
        `
          Conducted code reviews and provided constructive feedback to peers, fostering a culture of collaboration and
          continuous improvement within the development team.
        `,
        `
          Worked closely with product managers to gather and refine requirements, translating them into actionable technical
          tasks and project deliverables.
        `,
        `
          Integrated internationalization (i18n) and localization (l10n) features into web applications,
          allowing the platform to be accessible to a global audience.
        `,
        `
          Led the adoption of containerization technologies like Docker for development and production environments,
          streamlining the deployment process and ensuring consistency across different stages of development.
        `,
        `
          Implemented user authentication and authorization mechanisms using OAuth and JWT, enhancing security
          and user privacy on the platform.
        `,
        `
          Developed and maintained RESTful APIs, enabling seamless communication between frontend and
          backend systems and supporting third-party integrations.
        `,
        `
          Conducted usability testing and gathered user feedback to inform design and development decisions,
          resulting in iterative improvements to the user interface and user experience.
        `,
        `
          Actively participated in sprint planning, daily stand-ups, and retrospectives, contributing to the
          team's Agile process and fostering a culture of transparency and adaptability.
        `,
        `
          Investigated and resolved production issues and bugs, employing debugging tools and error tracking
          systems to ensure a stable and reliable platform.
        `,
        `
          Mentored and onboarded new team members, facilitating their integration into the team and providing
          guidance on best practices and coding standards.
        `,
        `
          Participated in hackathons and innovation initiatives, contributing creative solutions and prototypes
          to address business challenges and explore new opportunities.
        `
      ],
    },
    {
      id: uuidv4(),
      companyName: 'Upwork',
      employmentSpan: ["January  2013", "October  2016"],
      employmentStack: "Freelance",
      searchStack: ["react", "javascript", "js", "jquery",],
      projectBrief: [
        `
          My engagement with Upwork, a prominent online freelancing platform, afforded me a
          unique vantage point into the realm of remote collaboration and project-based engagements.
          Upwork serves as a conduit for clients seeking to engage proficient freelancers and freelance agencies
          for a myriad of projects, facilitated through its well-structured platform.
        `,
        `
          Within this ecosystem, clients initiate the process by articulating the specifics of their projects and stipulating
          a budget range commensurate with their expectations. Subsequently, freelancers, including myself,
          have the opportunity to respond to these project descriptions, showcasing their qualifications and suitability
          for the tasks at hand. Alternatively, clients can opt to make their projects open for application to a broader
          pool of interested freelancers.
        `,
        `
          A pivotal aspect of this experience was recognizing the paramount importance of effective communication when liaising
          with clients hailing from diverse cultural and professional backgrounds. This realization was particularly pronounced
          when engaging with clients lacking a coding background, underscoring the need for clarity, concise explanations,
          and patience in articulating technical concepts.
        `,
        `
          While my involvement with Upwork primarily constituted a research phase, it provided me with invaluable insights into
          the nuances of cross-cultural communication, the intricacies of project scoping, and the necessity of
          tailoring technical discussions to suit the client's level of understanding. This exploration served as a
          foundation for my subsequent endeavors, reinforcing my conviction that clear and adept communication is
          the linchpin for successful collaboration, especially in the context of interdisciplinary projects.
        `,
        `
          In essence, my time on the Upwork platform was a pivotal juncture in my professional journey, where I
          engaged with the global freelance community, imbibed crucial communication skills, and internalized the
          importance of adaptability in catering to diverse client profiles. These lessons continue to resonate in
          my ongoing pursuit of excellence in software engineering and project collaboration.
        `,
      ],
      implementations: [
       `
          Research and implement tons of React and JavaScript functionality for a richer Front-End experience.
       `,
       `
          Ruby on Rails, JavaScript, React, jQuerry, Behavioral Driven Development (BDD) and pair based programming is
          used to develop client-based features and applications.
       `,
       `
          Used JIRA for real-time issue tracking, bug tracking, and project management functions Installation and configuration
          of multiple versions of Ruby on Rails.
       `,
       `
          Leveraged existing APIs available (Google) to adopt other services to adjust to tight deadlines and use
          already built functionality.
       `,
       `
          Collaborated with clients to understand project requirements and deliver custom React and JavaScript solutions
          that exceeded expectations and enhanced user experience.
       `,
       `
          Developed responsive and mobile-friendly web applications using Bootstrap and media queries to ensure seamless user
          interactions across various devices.
       `,
       `
          Implemented Redux for state management in React applications, enhancing the scalability and maintainability of
          complex frontend architectures.
       `,
       `
          Participated in code refactoring initiatives, improving code quality and adhering to best practices for clean,
          efficient, and maintainable code.
       `,
       `
          Integrated third-party APIs, such as Stripe and PayPal, to enable secure and seamless payment processing in e-commerce
          applications.
       `,
       `
          Utilized Test-Driven Development (TDD) practices, writing unit tests with frameworks like Enzyme and Jasmine to ensure
          code reliability and facilitate future code changes.
       `,
       `
          Collaborated with UX designers to convert wireframes and mockups into interactive web pages with
          pixel-perfect precision and attention to detail.
       `,
       `
          Implemented server-side rendering (SSR) for React applications using frameworks like Next.js, enhancing SEO and
          reducing initial page load times.
       `,
       `
          Led client-facing meetings and status updates, providing clear communication and progress reports on project milestones
          and deliverables.
       `,
       `
          Conducted load testing and performance optimization using tools like Lighthouse and WebPageTest, ensuring high
          application performance and user satisfaction.
       `,
       `
          Utilized Git and GitHub for version control and collaborative development, maintaining organized
          and efficient code repositories.
       `,
       `
          Provided technical support and training to clients on how to use and maintain the applications delivered,
          ensuring a smooth handover and positive user experience.
       `,
       `
          Developed custom plugins and extensions for content management systems (CMS) like WordPress and Joomla,
          enabling tailored functionalities to meet client requirements.
       `,
      ],
    },
];

export default defaultState;