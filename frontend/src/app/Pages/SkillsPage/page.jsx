export default function SkillsPage() {
  const skills = [
    "JavaScript",
    "ReactJS",
    "Next.js",
    "TailwindCSS",
    "Python",
    "Django",
    "Firebase",
    "MongoDB",
    "System Design",
    "AWS",
    "WebSockets",
    "Docker",
    "Nginx",
    "Redis",
    "Microservices",
  ];

  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border border-gray-300 rounded-xl py-6 text-center text-lg font-semibold hover:shadow-md transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
