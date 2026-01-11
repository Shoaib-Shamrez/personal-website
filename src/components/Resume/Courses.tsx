'use client';

import React, { useReducer } from 'react';

import type { Certification as CertificationType } from '@/data/resume/Certification';

import Certification from './Courses/Certification';
import CategoryButton from './Skills/CategoryButton';

interface CoursesProps {
  data: CertificationType[];
}

const categories: CertificationType['category'][] = [
  'Web',
  'Project Management',
  'Agile',
  'Quality',
];

// Reducer to manage category button state
type ButtonState = Record<string, boolean>;
type ButtonAction = { type: 'TOGGLE_CATEGORY'; label: string };

const buttonReducer = (state: ButtonState, action: ButtonAction): ButtonState => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY': {
      const newButtons = Object.keys(state).reduce(
        (obj, key) => ({
          ...obj,
          [key]: action.label === key && !state[key],
        }),
        {} as ButtonState,
      );
      newButtons.All = !Object.keys(state).some((key) => newButtons[key]);
      return newButtons;
    }
    default:
      return state;
  }
};

const Courses: React.FC<CoursesProps> = ({ data }) => {
  // Initialize buttons: All + categories
  const initialButtons: ButtonState = Object.fromEntries(
    [['All', false]].concat(categories.map((cat) => [cat, false])),
  );

  const [buttons, dispatch] = useReducer(buttonReducer, initialButtons);

  const handleChildClick = (label: string) => {
    dispatch({ type: 'TOGGLE_CATEGORY', label });
  };

  const getButtons = () =>
    Object.keys(buttons).map((key) => (
      <CategoryButton label={key} key={key} active={buttons} handleClick={handleChildClick} />
    ));

  const getFilteredCertifications = () => {
    const activeCategory = Object.keys(buttons).find((key) => buttons[key]) || 'All';

    return data
      .filter((cert) => activeCategory === 'All' || cert.category === activeCategory)
      .sort((a, b) => {
        let ret = 0;
        if (a.university > b.university) ret = -1;
        else if (a.university < b.university) ret = 1;
        else if (a.number > b.number) ret = 1;
        else if (a.number < b.number) ret = -1;
        return ret;
      })
      .map((certification, idx, arr) => (
        <Certification
          data={certification}
          key={certification.title}
          last={idx === arr.length - 1}
        />
      ));
  };

  return (
    <div className="courses">
      <div className="link-to" id="courses" />
      <div className="title mb-4">
        <h3 className="text-2xl font-bold">Courses</h3>
      </div>
      <div className="skill-button-container">{getButtons()}</div>
      <ul className="cert-list grid gap-4">{getFilteredCertifications()}</ul>
    </div>
  );
};

export default Courses;
