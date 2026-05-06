import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let animationId;
    let time = 0;

    const drawAvatar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radiusX = 180;
      const radiusY = 140;

      // Glow
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, Math.max(radiusX, radiusY) + 20);
      gradient.addColorStop(0, "rgba(34, 197, 94, 0.3)");
      gradient.addColorStop(0.5, "rgba(34, 197, 94, 0.1)");
      gradient.addColorStop(1, "rgba(34, 197, 94, 0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX + 20, radiusY + 20, 0, 0, Math.PI * 2);
      ctx.fill();

      // Outer oval
      ctx.strokeStyle = "#22c55e";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating dots
      const dotCount = 12;
      for (let i = 0; i < dotCount; i++) {
        const angle = (time * 0.5 + (i / dotCount) * Math.PI * 2);
        const x = centerX + Math.cos(angle) * (radiusX - 30);
        const y = centerY + Math.sin(angle) * (radiusY - 30);

        ctx.fillStyle = "#22c55e";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Inner oval
      ctx.fillStyle = "rgba(168, 85, 247, 0.1)";
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radiusX - 40, radiusY - 40, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(168, 85, 247, 0.3)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Inner floating dots
      const innerRadiusX = radiusX - 40;
      const innerRadiusY = radiusY - 40;
      for (let i = 0; i < 4; i++) {
        const angle = (time * 0.3 + (i / 4) * Math.PI * 2);
        const x = centerX + Math.cos(angle) * innerRadiusX * 0.6;
        const y = centerY + Math.sin(angle) * innerRadiusY * 0.6;

        ctx.fillStyle = "rgba(59, 130, 246, 0.6)";
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      time += 0.02; // smoother animation
      animationId = requestAnimationFrame(drawAvatar);
    };

    drawAvatar();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#1a1a3e] to-[#0a0e1a] pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full border border-emerald-500 bg-emerald-500/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-xs font-medium text-emerald-400">
                Available for opportunities
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-purple-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Prashant
                </span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Tripathi
                </span>
              </h1>

              {/* Role */}
              <p className="text-lg sm:text-xl text-emerald-400 font-mono mt-2">
                &gt; MERN Developer | Java | python | React | Node.js | MongoDB
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Full Stack Developer specializing in MERN stack & Java. I build scalable,
              production-ready web applications that solve real-world problems.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 sm:px-8 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 text-center"
              >
                View Projects →
              </a>

              <a
                href="/assets/resume.pdf"
                download="Prashant_Tripathi_Resume.pdf"
                className="px-6 sm:px-8 py-3 rounded-lg border-2 border-gray-600 text-gray-300 font-semibold hover:border-indigo-500 hover:text-indigo-400 transition-all duration-300 text-center"
              >
                ↓ Download Resume
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center justify-center h-[400px] sm:h-[500px] lg:h-full">
            <div className="absolute inset-x-0 top-10 h-24 bg-gradient-to-r from-purple-500/20 via-cyan-300/10 to-indigo-500/20 blur-3xl" />
            <canvas ref={canvasRef} className="relative w-full h-full max-w-sm" />
          </div>

        </div>
      </div>
    </section>
  );
}