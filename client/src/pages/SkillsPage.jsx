import React from "react";
import Navbar from "../components/Navbar";

const SkillsPage = () => {
  const skills = [
    { name: "Java / Spring Boot", proficiency: 90 },
    { name: "React.js", proficiency: 85 },
    { name: "Node.js / Express", proficiency: 82 },
    { name: "MongoDB", proficiency: 88 },
    { name: "Python / ML", proficiency: 72 },
    { name: "AWS / DevOps", proficiency: 68 },
  ];

  return (
    <div className="bg-[#0a0e1a] text-white min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 px-6 md:px-20 bg-[#0a0e1a]">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="mb-16">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              // EXPERTISE
            </p>
            <h2 className="text-5xl md:text-6xl font-bold text-white mt-2">
              Skills & <span className="text-cyan-400">Technologies</span>
            </h2>
            <p className="text-gray-400 mt-6 max-w-2xl text-lg">
              Here's a comprehensive overview of my technical expertise and proficiency levels in various technologies and frameworks.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
                  <span className="text-cyan-400 font-bold text-lg">{skill.proficiency}%</span>
                </div>
                <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-20 p-8 border border-cyan-400/20 rounded-lg bg-gradient-to-br from-cyan-400/5 to-transparent">
            <h3 className="text-2xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm committed to staying updated with the latest technologies and industry best practices. 
              I regularly participate in online courses, contribute to open-source projects, and experiment 
              with emerging tools and frameworks to expand my skill set.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillsPage;
