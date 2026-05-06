import { FaReact, FaNodeJs, FaJava, FaDocker, FaAws } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTypescript, SiRedis, SiPython } from "react-icons/si";
import avatarImage from "../assets/avatar.png";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0e1a] text-white px-6 lg:px-20 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
        Crafting digital <br />
        experiences that{" "}
        <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          matter
        </span>
      </h2>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT BOX (Avatar Card) */}
        <div className="border border-indigo-500 rounded-[30px] w-full max-w-[380px] self-start flex flex-col items-center justify-start gap-6 p-6 bg-gradient-to-br from-[#111827] to-[#1f2937] shadow-xl shadow-slate-950/40">
          <div className="w-full rounded-[28px] overflow-hidden bg-slate-900/40 border border-white/10 shadow-2xl shadow-indigo-500/10">
            <img
              src={avatarImage}
              alt="Prashant Tripathi"
              className="w-full h-[420px] object-contain bg-[#0f172a]"
            />
          </div>
          <div className="text-center px-2 pb-4">
            <p className="text-2xl font-semibold text-white">Prashant Tripathi</p>
            <p className="text-sm text-gray-300 mt-1">MERN Developer | Java | Python</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">

          <p>
            I am a B.Tech Computer Science Engineering student at Galgotias University, currently pursuing my degree with a strong focus on full-stack web development, Java, and Python.
          </p>

          <p>
            I build modern, responsive applications using technologies like React, Node.js, MongoDB, and Tailwind CSS, and I also develop AI-powered solutions such as churn prediction systems using Python and scikit-learn.
          </p>

          <p>
            My career goal is to apply problem-solving, teamwork, and technical skills to create real-world software products and intelligent systems.
          </p>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-4">
            <Skill icon={<FaJava />} name="Java" />
            <Skill icon={<SiPython />} name="Python" />
            <Skill icon={<SiTypescript />} name="JavaScript" />
            <Skill icon={<FaReact />} name="React.js" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiPostgresql />} name="MySQL" />
            <Skill icon={<FaAws />} name="Git/GitHub" />
            <Skill icon={<SiRedis />} name="Tailwind CSS" />
            <Skill icon={<SiTypescript />} name="HTML/CSS" />
          </div>

          <div className="grid gap-6 mt-10 sm:grid-cols-2">
            <div className="p-6 border border-indigo-500/20 rounded-2xl bg-[#111827]">
              <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="text-white font-semibold">Galgotias University</p>
                  <p>B.Tech in Computer Science Engineering • CGPA 7.9/10</p>
                  <p className="text-gray-400">Oct 2023 – Apr 2027</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Rais Ahmed Inter College</p>
                  <p>12th Class • 73.2%</p>
                  <p className="text-gray-400">Apr 2023</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Rais Ahmed Inter College</p>
                  <p>10th Class • 89%</p>
                </div>
              </div>
            </div>

            <div className="p-6 border border-indigo-500/20 rounded-2xl bg-[#111827]">
              <h3 className="text-xl font-semibold text-white mb-4">Experience & Certifications</h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div>
                  <p className="text-white font-semibold">Infosys Springboard 6.0</p>
                  <p>Internship focused on the TaxPal finance management web application.</p>
                  <a
                    href="/assets/internship-certificate.pdf"
                    download="Prashant_Tripathi_Internship_Certificate.pdf"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Download Internship Certificate
                  </a>
                  <p className="text-gray-400">Oct 2025 – Dec 2025</p>
                </div>
                <div>
                  <p className="text-white font-semibold">Angular Web Developer</p>
                  <p>Certification from Infosys Springboard.</p>
                  <p className="text-gray-400">Jun 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Skill Card Component */
function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-700 bg-[#111827] hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300">
      <div className="text-2xl mb-2">{icon}</div>
      <p className="text-xs">{name}</p>
    </div>
  );
}