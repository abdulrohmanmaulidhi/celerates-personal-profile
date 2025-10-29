import { Send } from "lucide-react";
import profile from "../assets/images/profie.jpg";

function AboutSection() {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <img src={profile} alt="About Me" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="text-gray-600 leading-relaxed">
            Hi! I'm Rohman, a passionate designer and frontend developer based in Surabaya. With a background in visual design and a love for coding, I specialize in building websites and apps that are not only stunning but also
            user-friendly.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">UI/UX Design</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Web Development</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Branding</span>
            <span className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">Motion Graphics</span>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mt-4 hover:shadow-lg transition-all">
            <Send size={16} onClick={() => (window.location.href = "https://linkedin.com/in/abdulrohmanmaulidhi")} /> Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
