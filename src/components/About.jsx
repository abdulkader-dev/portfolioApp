/* eslint-disable no-unused-vars */
import React from 'react';

const About = () => (
  <section id="about" className="bg-white py-12">
    <div className="container mx-auto flex flex-col items-center">
      <img src="/profile.jpg" alt="Profile" className="w-32 h-32 rounded-full border-4 border-blue-600 mb-4" />
      <h2 className="text-4xl font-semibold mb-2">About Me</h2>
      <p className="text-lg text-gray-700 text-center max-w-md">
      Hi, I'm Abdul Kader, a passionate web developer, creating beautiful and functional websites. 
      I specialize in front-end development and have experience with React, TailwindCSS, and more.
      </p>
    </div>
  </section>
);

export default About;
