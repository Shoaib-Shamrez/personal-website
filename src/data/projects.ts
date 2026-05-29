export interface Project
{
  title: string;
  subtitle?: string;
  link?: string;
  image: string;
  date: string;
  desc: string;
  github?: string;
}

const data: Project[] = [
  {
    title: 'StandupBot Intelligence',
    subtitle: 'Internal Tool – AI-Powered Standup Reconciliation Engine',
    image: '/images/projects/dashboard_standup.png',
    github: 'https://github.com/uExel/StandupBot',
    link: 'https://app.meta360.dev/',
    date: '2026-05-29',
    desc:
      'Built a full‑stack Slack bot that automates daily standup collection and reconciles “said vs built” using Claude AI. ' +
      'Slack bot captures standups via slash commands and modals (Socket Mode). GitHub webhooks ingest commits and PRs, linked to developers via /linkgithub. ' +
      'A daily cron job (5:30 PM PKT) fetches each developer’s plan + actual output (commits, PRs, manual tasks) and calls Claude Haiku to generate alignment scores, flags (on‑track/at‑risk/blocked), and plain‑English gap analysis. ' +
      'Results are stored in PostgreSQL; a consolidated Slack digest and per‑developer DMs are posted automatically. ' +
      'Added JWT authentication, paginated REST APIs, weekly summaries for managers, and manual task logging (/task‑done) for non‑developers. ' +
      'Built a React dashboard (TypeScript, Tailwind) that displays said‑vs‑built, commit counts, and trends. ' +
      'Deployed on Digital Ocean with PM2. System eliminates manual status reporting and provides real‑time engineering accountability.'
  },
  {
    title: 'OmniScribe AI',
    subtitle: 'Personal Project = Speech to Text Web App',
    image: '/images/projects/omniScribe_Frontend.png',
    github: 'https://github.com/Shoaib-Shamrez/OmniScribe',
    date: '2026-03-24',
    desc:
      'Built a full stack speech-to-text API that transcribes audio and video files of any length — including 2-3 hour meeting recordings — into timestamped text using OpenAI Whisper. ' +
      'Designed an async producer-consumer architecture where FastAPI receives the upload and responds instantly with a job ID, while a Celery worker processes the file in the background using Redis as the job queue. ' +
      'Integrated FFmpeg to extract audio tracks from video files before transcription, reducing file size by up to 80% and improving processing speed. ' +
      'Built the frontend in React with TypeScript and Tailwind CSS, featuring a drag and drop upload zone, real time job status polling, and an interactive timestamped transcript view.',
  },
  {
    title: 'uXL-LMS Web Application',
    subtitle: 'Team Project — uExel Solutions',
    image: '/images/projects/uxl-ms.png',
    github: 'https://github.com/uExel/levelup_front/',
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
    image: '/images/projects/uxl-POS.png',
    github: 'https://github.com/uExel/uXL-POS',
    date: '2024-05-15',
    desc:
      'Contributed to core features, improved code structure, fixed bugs, and helped make uXL-POS production-ready as part of the uExel development team. ' +
      'Worked collaboratively with other developers to enhance frontend components, optimize performance, and ensure seamless integration with backend services. ' +
      'Used React, TypeScript, TailwindCSS, and Ant Design to implement improvements, refine UI behavior, and support reliable, scalable delivery.',
  },
  {
    title: 'TaskFlow',
    subtitle: 'Personal Project — Full-Stack Task Management App',
    image: '/images/projects/login.jpeg',
    github: 'https://github.com/Shoaib-Shamrez/TaskFlow',
    date: '2024-06-10',
    desc:
      'Built a full-stack Kanban-style task management application with React, Node.js, Express, MongoDB, and TailwindCSS. ' +
      'TaskFlow allows users to manage projects, boards, tasks, columns, and team members with an intuitive drag-and-drop interface. ' +
      'Implemented frontend state management with Redux, integrated REST APIs, and deployed using Render and Vercel for live production access.' +
      'This project demonstrates skills in MongoDB Atlas, frontend development, REST APIs, Redux state management, routing, MERN stack, deployment on Render and Vercel, and version control with GitHub.',
  },
  {
    title: 'Piano Trainer',
    subtitle: 'Chrome Extension — Virtual Piano Learning Tool',
    github: 'https://github.com/Shoaib-Shamrez/Piano-Trainer',
    image: '/images/projects/Piano_trainer.jpg',
    date: '2024-07-05',
    desc:
      'Developed a Chrome Extension that allows users to play a virtual piano and learn songs directly in the browser. ' +
      'Built with React and Vite, and packaged as a web extension using vite-plugin-web-extension. ' +
      'This project showcases skills in frontend development, React component architecture, browser extensions, and modern build tools.',
  },
  {
    title: 'Lottery Results Platform',
    subtitle: 'Results-Driven Web Application',
    image: '/images/projects/Lottery.png',
    github: 'https://github.com/Shoaib-Shamrez/LotteryResults',
    date: '2025-11-15',
    desc:
      'A performance-focused lottery results platform designed for accuracy, speed, and scalability. ' +
      'Includes a dynamic admin panel for managing results, automatic sitemap generation for improved search indexing, ' +
      'and an SEO-friendly architecture optimized for fast load times. ' +
      'Built to prioritize functionality, data reliability, and long-term maintainability over visuals alone.',
  },
  {
    title: 'Elegant Store - Ecomerce Website',
    subtitle: 'Horizon Tech Services',
    image: '/images/projects/Elegant-store.jpg',
    github: 'https://github.com/Shoaib-Shamrez/Elegant-Store',
    date: '2024-12-22',
    desc:
      'A full-stack e-commerce web application with complete user and admin workflows. ' +
      'Users can authenticate, browse and search products, manage cart items, select variants, and complete purchases using multiple payment methods. ' +
      'The system includes a dedicated admin panel for product and supplier management, sales and purchase tracking, purchase order creation, and invoice generation (view, print, and download). ' +
      'Built using a RESTful architecture to connect a React-based frontend with a Node.js and Express backend, backed by a MySQL database.',
  },
  {
    title: 'Online Code Editor (CodePen Clone)',
    subtitle: 'Frontend Web Application',
    github: 'https://github.com/Shoaib-Shamrez/CodeEditor',
    image: '/images/projects/Code-Editor-2.jpg',
    date: '2024-05-30',
    desc:
      'A browser-based code editor inspired by CodePen, built using React and CodeMirror. ' +
      'Supports live editing of HTML, CSS, and JavaScript with real-time preview rendering. ' +
      'Focused on smooth editor performance, clean UI layout, and accurate code execution. ' +
      'Implemented using react-codemirror-2 to provide a developer-friendly editing experience.',
  }



];

export default data;
