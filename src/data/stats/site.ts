import dayjs from 'dayjs';

import { StatData } from '../../components/Stats/types';

const data: StatData[] = [


  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: 'https://github.com/Shoaib-Shamrez/personal-website/commits',
    format: (x: unknown) => dayjs(x as string).format('MMMM DD, YYYY'),
  },
  {

    label: 'Language used',
    key: 'language',
    link: 'https://github.com/Shoaib-Shamrez/personal-website/',
  },
];

export default data;
