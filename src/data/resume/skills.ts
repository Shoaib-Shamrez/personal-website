export interface Skill {
  title: string;
  competency: number; // 1–5
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Languages
  {
    title: 'JavaScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'TypeScript',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'HTML5',
    competency: 5,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'CSS3',
    competency: 4,
    category: ['Languages', 'Web Development'],
  },
  {
    title: 'SQL',
    competency: 3,
    category: ['Languages', 'Databases'],
  },

  // Frontend
  {
    title: 'React.js',
    competency: 4,
    category: ['Frontend', 'Web Development'],
  },
  {
    title: 'Next.js',
    competency: 3,
    category: ['Frontend', 'Web Development'],
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Frontend', 'UI'],
  },
  {
    title: 'Ant Design',
    competency: 4,
    category: ['Frontend', 'UI'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Frontend', 'State Management'],
  },

  // Backend
  {
    title: 'Node.js',
    competency: 4,
    category: ['Backend', 'Web Development'],
  },
  {
    title: 'Express.js',
    competency: 4,
    category: ['Backend', 'Web Development'],
  },
  {
    title: 'REST APIs',
    competency: 4,
    category: ['Backend', 'Web Development'],
  },

  // Databases
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB Atlas',
    competency: 3,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 3,
    category: ['Databases'],
  },

  // Tools & DevOps
  {
    title: 'Git & GitHub',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Postman',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Vercel',
    competency: 3,
    category: ['Deployment'],
  },
  {
    title: 'Render',
    competency: 3,
    category: ['Deployment'],
  },

  // Other
  {
    title: 'Chrome Extensions',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Agile / Scrum',
    competency: 3,
    category: ['Project Management'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// Colors must match number of categories
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#64cb7b',
  '#747fff',
];

const categories: Category[] = Array.from(
  new Set(skills.flatMap(({ category }) => category)),
)
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
