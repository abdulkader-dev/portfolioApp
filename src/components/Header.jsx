/* eslint-disable no-unused-vars */
import React from 'react';

const Header = () => (
  <header className="bg-blue-600 text-white p-6 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <h1 className="text-3xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
