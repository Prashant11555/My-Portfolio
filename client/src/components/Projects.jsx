import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "TaxPal",
      description:
        "A full-stack finance management web app built with the MERN stack. Includes expense tracking, budgeting, tax calculation, responsive UI, reusable components, and backend API integration.",
      tags: ["MERN Stack", "React", "Node.js", "MongoDB", "Finance"],
      techStack: ["React", "Express.js", "MongoDB", "Tailwind CSS"],
      icon: "💰",
      liveDemo: "#",
      sourceCode: "#",
    },
    {
      id: 2,
      title: "Customer Churn Prediction System",
      description:
        "A machine learning powered predictive analytics system that analyzes customer behavior patterns to identify churn risk. Built with Python, scikit-learn, and integrated with a React dashboard for real-time insights and visualizations.",
      tags: ["Machine Learning", "Python", "AI", "Data Science"],
      techStack: ["Python", "scikit-learn", "pandas", "React Dashboard"],
      icon: "📊",
      liveDemo: "https://customer-churn-prediction-system-f6yeexyw6rnrgbhbrfac6g.streamlit.app/",
      sourceCode: "https://github.com/Prashant11555/Customer-Churn-Prediction-System.git",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            // WORK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Explore some of my key projects showcasing my expertise in full-stack development and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group p-8 border border-cyan-400/20 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 bg-gradient-to-br from-cyan-400/5 to-transparent"
            >
              {/* Icon & Title */}
              <div className="mb-4">
                <div className="text-5xl mb-4">{project.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 rounded-full hover:bg-cyan-400/20 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold mb-2">
                  Tech Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-cyan-400/10">
                <a
                  href={project.liveDemo}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center gap-2 group/link"
                >
                  Live Demo
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={project.sourceCode}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors flex items-center gap-2 group/link"
                >
                  Source Code
                  <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
