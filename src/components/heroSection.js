import { Instagram, Github, Linkedin } from "lucide-react";
import profile from "../assets/images/profie.jpg";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-indigo-50 to-purple-50 mt-10 pt-24 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-2/5 space-y-6">
          <p className="text-purple-600 font-medium">Hello, I'm Rohman</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">Creative Designer & Frontend Developer</h1>
          <p className="text-gray-600 mt-4">Passionate in creating beautiful and functional digital experiences. I love blending creativity with technology to make impactful solutions for users and brands.</p>
          <div className="flex gap-4 mt-8">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all" onClick={() => (window.location.href = "https://abdulrohmanmaulidhi.vercel.app")}>
              See My Work
            </button>
            <button className="border border-purple-500 text-purple-500 px-6 py-3 rounded-lg font-medium hover:bg-purple-50 transition-all" onClick={() => (window.location.href = "https://wa.me/6285791469949")}>
              Contact Me
            </button>
          </div>
          <div className="flex gap-4 mt-6">
            <Instagram className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://instagram.com/abdul.rohmanm")} />
            <Github className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://github.com/abdulrohmanmaulidhi")} />
            <Linkedin className="text-purple-600 cursor-pointer hover:text-purple-700" onClick={() => (window.location.href = "https://linkedin.com/in/abdulrohmanmaulidhi")} />
          </div>
        </div>
        <div className="md:w-2/5 relative flex justify-center md:justify-end">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-50 hidden md:block"></div>
          <div className="relative z-10">
            <img src={profile} alt="Profile" className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
