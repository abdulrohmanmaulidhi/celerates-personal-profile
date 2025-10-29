function SkillsSection() {
  const skills = [
    {
      title: "UI/UX Design",
      description: "Figma, Adobe XD, Sketch",
      icon: (
        <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Frontend Dev",
      description: "React, Vue, Tailwind",
      icon: (
        <svg className="w-8 h-8 text-indigo-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
      ),
    },
    {
      title: "Branding",
      description: "Logo, Identity, Print",
      icon: (
        <svg className="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
    {
      title: "Motion Graphic",
      description: "After Effects, Lottie",
      icon: (
        <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="skills" className="py-16 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{skill.title}</h3>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
