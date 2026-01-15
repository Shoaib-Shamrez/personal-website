import dayjs from 'dayjs';

import Image from 'next/image';
import React from 'react';

import type { Project } from '@/data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';

interface CellProps {
  data: Project;
}

const Cell: React.FC<CellProps> = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header className="project-header">
        <div>
          <h3>
            <a href={data.link}>{data.title}</a>
          </h3>
          <time className="published">{dayjs(data.date).format('MMMM, YYYY')}</time>
        </div>
        <div className="github-link">
          <a href={data.github} aria-label="GitHub Repository" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <h6>Github</h6>
        </div>
      </header>

      <a href={data.link} className="image">
        <Image src={data.image} alt={data.title} width={600} height={400} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
