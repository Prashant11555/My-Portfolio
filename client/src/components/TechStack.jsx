import React from "react";

const TechStack = () => {
  const technologies = [
    {
      icon: "😊",
      title: "Frontend",
      description: "React.js, HTML, CSS, Tailwind CSS, responsive UI",
    },
    {
      icon: "⚙️",
      title: "Backend",
      description: "Node.js, Express.js, Java, REST APIs, backend integration",
    },
    {
      icon: "💾",
      title: "Database",
      description: "MongoDB, MySQL, data modeling, API-driven storage",
    },
    {
      icon: "🚀",
      title: "Tools",
      description: "Git/GitHub, VS Code, Docker, AWS, modern workflows",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-[#0a0e1a]">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
            // TECH STACK
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
            What I <span className="text-cyan-400">Use</span>
          </h2>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 border border-cyan-400/20 rounded-lg hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 bg-gradient-to-br from-cyan-400/5 to-transparent"
            >
              <div className="text-4xl mb-4">{tech.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
