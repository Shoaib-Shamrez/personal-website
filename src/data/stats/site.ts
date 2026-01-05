import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

const data: StatData[] = [


  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/mldangelo/personal-site/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {

    label: 'Lines of TypeScript powering this website',
    value: '0',
    link: 'https://github.com/mldangelo/personal-site/graphs/contributors',
  },
];

export default data;
