import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import SkillsPage from "./pages/SkillsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="bg-[#0a0e1a] text-white min-h-screen">
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <TechStack />
              <Contact />
            </div>
          }
        />
        
        {/* Skills Page */}
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;