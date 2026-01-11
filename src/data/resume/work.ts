/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'uExel',
    position: 'Full Stack Engineer (Intern)',
    url: 'https://uexel.com',
    startDate: '2025-10-01',
    summary:
      'Worked as a Full Stack Intern on real production systems, contributing to internal products including uXL-LMS and uXL-POS. ' +
      'Collaborated closely with senior developers to build features, fix bugs, and improve overall code quality in a fast-paced on-site environment.',
    highlights: [
      'Developed and maintained full-stack features using React, Node.js, Express, and TypeScript.',
      'Worked with REST APIs using Postman and integrated backend services into frontend components.',
      'Contributed to production readiness by fixing bugs, refactoring components, and improving code structure.',
      'Collaborated with the team using GitHub and followed modern development workflows.',
    ],
  },
  {
    name: 'Royalton Hotel Rawalpindi',
    position: 'WordPress Developer (Freelance)',
    url: 'https://royaltonhotel.com',
    startDate: '2025-02-01',
    endDate: '2025-03-01',
    summary:
      'Delivered a project-based freelance WordPress website for a hotel client, focusing on usability, performance, and mobile responsiveness.',
    highlights: [
      'Designed and launched a mobile-friendly booking website using WordPress, Elementor, and custom PHP/CSS.',
      'Integrated contact forms, Google Maps, and basic SEO optimizations to improve visibility and user experience.',
      'Coordinated directly with the client to gather requirements and deliver the project on time.',
    ],
  },
  {
    name: 'Horizon Tech Services Pvt. Ltd.',
    position: 'Full Stack Web Developer Intern',
    url: 'https://horizontechservices.com',
    startDate: '2024-10-01',
    endDate: '2024-12-01',
    summary:
      'Completed a full-stack development internship focused on building and optimizing web applications using modern JavaScript technologies.',
    highlights: [
      'Developed full-stack applications using React.js, Node.js, Express.js, and MySQL.',
      'Optimized database queries and application logic to improve performance and reduce load time.',
      'Worked in an Agile environment and collaborated using Git and Firebase.',
    ],
  },
  {
    name: 'Evamp & Saanga',
    position: 'Project Management Intern',
    url: 'https://evamp.com',
    startDate: '2024-08-01',
    endDate: '2024-10-01',
    summary:
      'Supported project managers across multiple live projects, gaining hands-on experience in Agile project coordination.',
    highlights: [
      'Tracked milestones and deliverables across 3+ active projects.',
      'Used tools like Trello and MS Project to manage sprints and timelines.',
      'Assisted in internal coordination and task distribution between teams.',
    ],
  },
  {
    name: 'BehinDev',
    position: 'Web Development Intern',
    url: 'https://behindev.com',
    startDate: '2024-05-01',
    endDate: '2024-06-01',
    summary:
      'Worked as a remote Web Development Intern focusing on frontend development and responsive UI implementation.',
    highlights: [
      'Built responsive web pages using HTML, CSS, JavaScript, and modern frontend practices.',
      'Converted design requirements into functional UI components.',
      'Gained hands-on experience working in a remote development environment.',
    ],
  },
];


export default work;
