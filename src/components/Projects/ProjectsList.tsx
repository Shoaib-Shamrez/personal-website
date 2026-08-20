'use client';

import React, { useReducer } from 'react';

import type { Project } from '@/data/projects';
import CategoryButton from '../Resume/Skills/CategoryButton';
import Cell from './Cell';

interface ProjectsListProps {
  data: Project[];
}

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
      newButtons.All = !Object.keys(newButtons).some((key) => key !== 'All' && newButtons[key]);
      return newButtons;
    }
    default:
      return state;
  }
};

const ProjectsList: React.FC<ProjectsListProps> = ({ data }) => {
  const categories = Array.from(new Set(data.flatMap((p) => p.category))).sort();

  const initialButtons: ButtonState = Object.fromEntries(
    [['All', true]].concat(categories.map((cat) => [cat, false])),
  );

  const [buttons, dispatch] = useReducer(buttonReducer, initialButtons);

  const handleChildClick = (label: string) => {
    dispatch({ type: 'TOGGLE_CATEGORY', label });
  };

  const activeCategory = Object.keys(buttons).find((key) => key !== 'All' && buttons[key]);

  const filtered = activeCategory ? data.filter((p) => p.category.includes(activeCategory)) : data;

  return (
    <>
      <div className="project-filter-container">
        {Object.keys(buttons).map((key) => (
          <CategoryButton label={key} key={key} active={buttons} handleClick={handleChildClick} />
        ))}
      </div>

      {filtered.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </>
  );
};

export default ProjectsList;
