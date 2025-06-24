import React from "react";

export const Skills = () => {
  const skills = {
    Programming: ["Python", "C", "SQL", "Java"],
    WebDev: ["HTML", "CSS", "JavaScript"],
    Tools: ["Git", "GitHub", "VS Code"],
    Cloud: ["AWS", "Google Cloud"],
    Learning: ["MERN Stack"]
  };

  return (
    <section className="px-6 py-16 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 border-b-2 border-gray-600 inline-block">
          Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-10">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">{category}</h3>
              <ul className="list-disc list-inside text-gray-400">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
