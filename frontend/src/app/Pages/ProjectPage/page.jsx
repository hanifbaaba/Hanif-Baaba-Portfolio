"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
  const PROJECT_DATA = [
    {
      title: "Zakat App",
      // link: "",
      repo: "https://github.com/hanifbaaba/Anas-Bn-Malik-Django-App",
      description:
        "A platform to collect, store and manage zakat beneficiaries with authentication and filtering.",
      image: "/projects/zakat.png",
    },
    {
      title: "TeleCare API",
      // link: "",
      repo: "https://github.com/hanifbaaba/telecare-api",
      description:
        "A Telemedicine app that provides online consultations for patients and doctors.",
      image: "/projects/telecare.png",
    },
    {
      title: "Furniro Store",
      // link: "",
      repo: "https://github.com/hanifbaaba/Furniro",
      description:
        "Full furniture e-commerce app with cart, filtering, and pagination.",
      image: "/projects/furniro.png",
    },
    {
      title: "JobPilot – Job Board",
      // link: "",
      repo: "https://github.com/hanifbaaba/JobPilot",
      description:
        "Job searching platform built with filtering, apply flow, and category sorting.",
      image: "/projects/jobpilot.png",
    },

    {
      title: "Social Media API",
      // link: "",
      repo: "https://github.com/hanifbaaba/Alx_DjangoLearnLab/tree/main/social_media_api",
      description: "Create amazing content and share with your friends.",
      image: "/projects/social-media.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-12 text-center">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {PROJECT_DATA.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
          >
            <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
              {project.image ? (
                <Image
                  src={project.image}
                  width={400}
                  height={300}
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400">No Image</span>
              )}
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex items-center justify-between mt-4">
                <Link
                  href={project.link || "#"}
                  className={`text-sm underline ${
                    project.link
                      ? "text-blue-500"
                      : "text-gray-400 pointer-events-none"
                  }`}
                >
                  <button> Live Demo</button>
                </Link>

                <Link
                  href={project.repo}
                  className="text-sm underline text-black hover:text-gray-600"
                >
                  View Repo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
