'use client';

import React, { useEffect, useState } from 'react';

import { StatData } from '../../components/Stats/types';

const Age: React.FC = () => {
  const [age, setAge] = useState<string>('');

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('2000-09-01T20:24:00');
    setAge(((Date.now() - birthTime.getTime()) / divisor).toFixed(11));
  };

  useEffect(() => {
    tick(); // Initial tick
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <>{age}</>;
};

const data: StatData[] = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'journey',
    label: 'Journey started',
    value: '2020',
  },
  {
    key: 'experience',
    label: 'Years learning & building',
    value: '3+ years',
  },
  {
    key: 'projects',
    label: 'Web projects built',
    value: '10+',
  },
  {
    key: 'team-projects',
    label: 'Team-delivered systems',
    value: '2 (uXL-LMS, uXL-POS)',
  },
  {
    key: 'tech',
    label: 'Core technologies',
    value: 'MERN, Tailwind, MUI, Ant',
  },
  {
    key: 'certification',
    label: 'Certification',
    value: 'NAVTTC (2022)',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Islamabad, PK',
  },
];

export default data;
