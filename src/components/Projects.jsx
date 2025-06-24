import React from "react";

const projects = [
  {
    title: "CloudWise – Smart Cloud Cost Optimizer",
    type: "Python",
    link: "#",
    description: "Optimizes cloud usage and costs using resource analysis techniques.",
  },
  {
    title: "Virtual OS Simulator",
    type: "Python",
    link: "#",
    description: "Simulates basic OS process scheduling and memory management.",
  },
  {
    title: "CodeDNA – Code Prompt Visualizer",
    type: "Website",
    link: "#",
    description: "Visual interface for converting code prompts into output visualizations.",
  },
  {
    title: "NeuroWeave – Thought-to-Code Prompt Visualizer",
    type: "Website",
    link: "#",
    description: "A futuristic tool visualizing ideas as structured code prompts.",
  },
  {
    title: "Exam Allocation Website",
    type: "Website",
    link: "#",
    description: "Automates exam hall and faculty allocation for colleges.",
  }
];

export const Projects = () => {
  return (
    <section className="px-6 py-16 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-gray-600 inline-block">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-black rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-1">{project.type}</p>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
