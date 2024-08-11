/* eslint-disable no-unused-vars */
import React from 'react';

const ProjectCard = ({ title, description, link }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-700 mb-4">{description}</p>
    <a href={link} className="text-blue-600 hover:underline">View Project</a>
  </div>
);

export default ProjectCard;
