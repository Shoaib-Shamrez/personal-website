import dayjs from 'dayjs';

import React from 'react';

import type { Project } from '@/data/projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInternetExplorer } from '@fortawesome/free-brands-svg-icons';

import Carousel from './Carousel';

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
        <div className="link">
          <div className="github">
            <a href={data.github} aria-label="GitHub Repository" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
            <h6>Github</h6>
          </div>
          {data.link ? (
            <div>
              <a href={data.link} aria-label="Live Link" target="_blank">
                <FontAwesomeIcon icon={faInternetExplorer} size="xl" />
              </a>
              <h6>Live</h6>
            </div>
          ) : null}
        </div>
      </header>

      <Carousel images={data.images} alt={data.title} />

      {data.category.length > 0 && (
        <div className="project-categories">
          {data.category.map((cat) => (
            <span className="project-category-badge" key={cat}>
              {cat}
            </span>
          ))}
        </div>
      )}

      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

export default Cell;
