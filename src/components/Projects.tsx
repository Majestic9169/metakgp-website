import React from "react";
import { ProjectCard } from './ProjectCard';
import { projects } from "../data/projects";
import '../styles/Projects.css';

export const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="projects-title">Featured Projects</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};