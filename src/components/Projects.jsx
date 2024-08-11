/* eslint-disable no-unused-vars */
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'My Portfolio',
    description: 'A modern portfolio website built with React and TailwindCSS.',
    link: '#'
  },
  {
    title: 'Chatting App',
    description: 'A real time chatting app, friends and groups with React, TailwindCSS and Firebase backend powered.',
    link: '#'
  },
  {
    title: 'E-Commerce Website',
    description: 'A modern E-Commerce Website with React, TailwindCSS, Express and MongoDB Backend powered.',
    link: '#'
  },
  {
    title: 'New Project',
    description: 'My new projects are under constraction and will publish soon....',
    link: '#'
  },
];

const Projects = () => (
  <section id="projects" className="bg-gray-100 py-12">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
