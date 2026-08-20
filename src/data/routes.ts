export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: "Shoaib Shamrez",
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Stats',
    path: '/stats',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
];

export default routes;
