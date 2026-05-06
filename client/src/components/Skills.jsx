import React from "react";

const Skills = () => {
  const skills = [
    { name: "Java", proficiency: 90 },
    { name: "Python", proficiency: 88 },
    { name: "JavaScript", proficiency: 85 },
    { name: "React.js", proficiency: 85 },
    { name: "Node.js", proficiency: 82 },
    { name: "MongoDB", proficiency: 80 },
    { name: "MySQL", proficiency: 76 },
    { name: "HTML / CSS", proficiency: 88 },
    { name: "Tailwind CSS", proficiency: 78 },
    { name: "Git / GitHub", proficiency: 82 },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            // EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold">{skill.name}</h3>
                <span className="text-cyan-400 font-bold">{skill.proficiency}%</span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
