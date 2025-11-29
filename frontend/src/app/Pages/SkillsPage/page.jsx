export default function SkillsPage() {
  const frontend = ["JavaScript", "ReactJS", "Next.js", "TailwindCSS"];
  const backend = [
    "Python",
    "Django",
    "System Design",
    "AWS",
    "WebSockets",
    "Docker",
    "Nginx",
    "Redis",
    "Microservices",
  ];
  const database = ["Firebase", "MongoDB", "PostgreSQL"];
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Tech Stack</h2>

      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-2">
          {frontend.map((frontend) => (
            <div
              key={frontend}
              className="border border-gray-300 rounded-xl py-6 text-center text-lg font-semibold hover:shadow-md transition"
            >
              {frontend}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6  p-2">
          {backend.map((backend) => (
            <div
              key={backend}
              kend
              className="border border-gray-300 rounded-xl py-6 text-center text-lg font-semibold hover:shadow-md transition"
            >
              {backend}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-2">
          {database.map((database) => (
            <div
              key={database}
              kend
              className="border border-gray-300 rounded-xl py-6 text-center text-lg font-semibold hover:shadow-md transition"
            >
              {database}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
