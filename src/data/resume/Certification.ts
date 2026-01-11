export interface Certification {
  title: string;
  date: string;
  number: string;
  link: string;
  university: string;
  category: 'Web' | 'Project Management' | 'Agile' | 'Quality';
}

const certifications: Certification[] = [
  {
    title: 'Scrum Fundamentals Certified (SFC)',
    number: 'Credential ID: 1046276',
    date: 'August 2024',
    link: '#',
    university: 'Vabro.al & VM Edu',
    category: 'Agile',
  },
  {
    title: 'Six Sigma Yellow Belt',
    number: 'Credential ID: 895165',
    date: 'September 2024',
    link: '#',
    university: 'The Global Certification Body for Six Sigma',
    category: 'Quality',
  },
  {
    title: 'Advanced Web Application Development',
    number: 'Govt. Certified',
    date: 'March 2022',
    link: '#',
    university: 'NAVTTC (National Vocational & Technical Training Commission)',
    category: 'Web',
  },
  {
    title: 'Project Management Fundamentals',
    number: '—',
    date: 'August 2024',
    link: '#',
    university: 'Project Management Institute (PMI)',
    category: 'Project Management',
  },
  {
    title: 'React Crash Course: From Zero to Hero',
    number: 'UC-a35398e-9c21-4f9f-99ee-5cef8f64350a',
    date: 'March 2024',
    link: '#',
    university: 'Udemy',
    category: 'Web',
  },
  {
    title: 'React and Redux Certification Test',
    number: 'Credential ID: IOCFW6D1',
    date: 'March 2024',
    link: '#',
    university: 'Complete Coding by Prashant Sir',
    category: 'Web',
  },
];

export default certifications;
