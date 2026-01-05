export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
  title: 'uXL-LMS Web Application',
  subtitle: 'Team Project — uExel Platform',
  image: '/images/projects/nearestdollar.jpg', // your image path
  date: '2024-03-01',
  desc:
    'Developed the full public-facing layout and responsive design for uXL-LMS from Figma to production using React, TypeScript, TailwindCSS, and Ant Design. ' +
    'This includes landing, About Us, Contact, Login, and Signup pages that users see before authentication, with pixel-perfect styling and smooth navigation. ' +
    'After login, users enter the core LMS system where students, teachers, and admins access their respective dashboards (not included here). ' +
    'Worked closely with the backend team to ensure seamless integration of frontend components and authentication flows.',
},
{
  title: 'uXL-POS Web Application',
  subtitle: 'Team Project — uExel Platform',
  image: '/images/projects/harvest.jpg', // your image path
  date: '2024-05-15',
  desc:
    'Contributed to core features, improved code structure, fixed bugs, and helped make uXL-POS production-ready as part of the uExel development team. ' +
    'Worked collaboratively with other developers to enhance frontend components, optimize performance, and ensure seamless integration with backend services. ' +
    'Used React, TypeScript, TailwindCSS, and Ant Design to implement improvements, refine UI behavior, and support reliable, scalable delivery.',
},
{
  title: 'TaskFlow',
  subtitle: 'Personal Project — Full-Stack Task Management App',
  image: '/images/projects/spacepotato.jpg', // replace with your project image
  date: '2024-06-10',
  desc:
    'Built a full-stack Kanban-style task management application with React, Node.js, Express, MongoDB, and TailwindCSS. ' +
    'TaskFlow allows users to manage projects, boards, tasks, columns, and team members with an intuitive drag-and-drop interface. ' +
    'Implemented frontend state management with Redux, integrated REST APIs, and deployed using Render and Vercel for live production access.'+
   'This project demonstrates skills in MongoDB Atlas, frontend development, REST APIs, Redux state management, routing, MERN stack, deployment on Render and Vercel, and version control with GitHub.',
},
{
  title: 'Piano Trainer',
  subtitle: 'Chrome Extension — Virtual Piano Learning Tool',
  image: '/images/projects/catdetector.png', // replace with your project image
  date: '2024-07-05',
  desc:
    'Developed a Chrome Extension that allows users to play a virtual piano and learn songs directly in the browser. ' +
    'Built with React and Vite, and packaged as a web extension using vite-plugin-web-extension. ' +
    'This project showcases skills in frontend development, React component architecture, browser extensions, and modern build tools.',
},


];

export default data;
