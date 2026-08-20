export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  images: string[];
  category: string[];
  date: string;
  desc: string;
  github?: string;
}

const data: Project[] = [
  {
    title: 'Meta360',
    subtitle: 'Internal Tool – AI-Powered Standup Reconciliation Engine',
    images: ['/images/projects/dashboard_standup.png'],
    category: ['SaaS', 'AI', 'Backend'],
    github: 'https://github.com/uExel/StandupBot',
    link: 'https://app.meta360.dev/',
    date: '2026-05-29',
    desc:
      'Built Meta360, a full‑stack multi‑tenant SaaS platform that automates daily standup collection and reconciles "said vs built" using Claude AI. ' +
      'A Slack bot (Socket Mode) captures standups via slash commands and modals, while GitHub webhooks ingest commits and PRs linked to developers through /linkgithub. ' +
      "A daily cron job (5:30 PM PKT) compares each developer's stated plan against their actual output — commits, PRs, and manual tasks — and calls Claude Haiku to generate alignment scores, status flags (on‑track / at‑risk / blocked), and plain‑English gap analysis. " +
      'Results are stored in a 15‑table PostgreSQL schema (TypeORM) with org‑level multi‑tenant isolation and encrypted token storage (AES‑256‑GCM); a consolidated Slack digest and per‑developer DMs post automatically. ' +
      'Added JWT authentication, paginated REST APIs, weekly manager summaries, RBAC, and manual task logging (/task‑done) for non‑developers. ' +
      'Built a React + TypeScript dashboard (Tailwind) showing said‑vs‑built comparisons, commit trends, and a committer leaderboard. ' +
      'Deployed on Digital Ocean with PM2, live at app.meta360.dev, serving 30+ developers across multiple paying organizations. ' +
      'Eliminates manual status reporting and gives engineering teams real‑time, evidence‑based accountability.',
  },
  {
    title: 'OmniScribe AI',
    subtitle: 'Personal Project = Speech to Text Web App',
    images: ['/images/projects/OmniScribe_Frontend.png'],
    category: ['AI', 'Backend'],
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
    images: ['/images/projects/uxl-ms.png'],
    category: ['Frontend', 'Team Project'],
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
    images: ['/images/projects/uxl-POS.png'],
    category: ['Frontend', 'Team Project'],
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
    images: ['/images/projects/login.jpeg', '/images/projects/develop-board.jpeg'],
    category: ['Full Stack', 'Frontend'],
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
    images: [
      '/images/projects/Piano_trainer.jpg',
      '/images/projects/1767849030106.jpg',
      '/images/projects/1767849030037.jpg',
    ],
    category: ['Chrome Extension', 'Frontend'],
    date: '2024-07-05',
    desc:
      'Developed a Chrome Extension that allows users to play a virtual piano and learn songs directly in the browser. ' +
      'Built with React and Vite, and packaged as a web extension using vite-plugin-web-extension. ' +
      'This project showcases skills in frontend development, React component architecture, browser extensions, and modern build tools.',
  },
  {
    title: 'Lottery Results Platform',
    subtitle: 'Results-Driven Web Application',
    images: ['/images/projects/Lottery.png'],
    category: ['Full Stack', 'Frontend'],
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
    images: ['/images/projects/Elegant-store.jpg', '/images/projects/1767849030003.jpg'],
    category: ['Full Stack', 'E-commerce'],
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
    images: ['/images/projects/Code-Editor-2.jpg', '/images/projects/Code-Editor.jpg'],
    category: ['Frontend'],
    date: '2024-05-30',
    desc:
      'A browser-based code editor inspired by CodePen, built using React and CodeMirror. ' +
      'Supports live editing of HTML, CSS, and JavaScript with real-time preview rendering. ' +
      'Focused on smooth editor performance, clean UI layout, and accurate code execution. ' +
      'Implemented using react-codemirror-2 to provide a developer-friendly editing experience.',
  },
];

export default data;
