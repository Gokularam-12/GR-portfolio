import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-black text-white">
      <img src="/profile.jpg" alt="My Profile" className="w-40 h-40 rounded-full mb-4 shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-bold mb-2">Gokularam M</h1>
      <p className="text-lg md:text-xl text-gray-400 mb-4">
        Computer Science Undergraduate | Seeking Internship in Software Development
      </p>
      <div className="flex gap-6 mt-4">
        <a
          href="https://linkedin.com/in/gokularam12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Gokularam-12"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-gray-400 text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};
