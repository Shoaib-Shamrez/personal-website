import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/Shoaib-Shamrez',
    label: 'Github',
    icon: faGithub,
  },

  {
    link: 'https://www.instagram.com/realshoaibch/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/shoaib-shamrez',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },

  {
    link: 'mailto:shoaibshamrez@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
