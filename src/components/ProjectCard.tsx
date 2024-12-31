import React from 'react';
import { Project } from '../types/project';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
      <div className="card-model">
      <img className="project-bg-image" src={project.backgroundImage} alt={`${project.id} Banner`}/>
      <div className="title-desc-col">
        <div>
          <img className="project-title-image" src={project.titleImage} alt={project.id}/>
        </div>
        <div className="project-desc">{project.projectDescription}</div>
      </div>
      <div className="git-star-icon-row">
        <div className="star-count-row">
          <div className="star-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
            </svg>
          </div>
          <div className="stars-count">{project.stars}</div>
        </div>
        <div>
          <a href={project.githubLink} className="github-icon" target="_blank" rel="noopener noreferrer">
            <svg fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" xmlns="http://www.w3.org/2000/svg" aria-label="github" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet" fill="currentColor" width="42" height="42">
              <g>
                <path d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z"/>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className="web-git-button-col">
        <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
          <button className="website-button">Go to Website</button>
        </a>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          <button className="github-button">Go to Github</button>
        </a>
      </div>
      </div>
  );
};