import React, { useEffect, useRef } from "react";
import { projects } from "../../data/portfolio";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Animate project cards on scroll
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#projects",
          start: "top 80%",
        },
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="projects" className="py-20 bg-bg text-txt px-6">
      <div className="max-w-5xl mx-auto text-center sm:text-left mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-p">Projects</h2>
        <p className="mt-3 text-s max-w-5xl">
          A selection of my key projects, showcasing AI, web development, and
          software engineering skills.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={addToRefs}
            className="bg-background/90 border border-s rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="bg-p">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-a">{project.title}</h3>
              <p className="mt-3 text-s flex-grow">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-a/20 text-a text-xs font-medium px-2 py-1 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.github && (
                  <a
                    href={project.github !== "#" ? project.github : undefined}
                    target={project.github !== "#" ? "_blank" : undefined}
                    rel={
                      project.github !== "#" ? "noopener noreferrer" : undefined
                    }
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      project.github !== "#"
                        ? "bg-a text-bg hover:bg-p"
                        : "bg-gray-500 text-gray-300 cursor-not-allowed opacity-50"
                    }`}
                    onClick={
                      project.github === "#"
                        ? (e) => e.preventDefault()
                        : undefined
                    }
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live !== "#" ? project.live : undefined}
                    target={project.live !== "#" ? "_blank" : undefined}
                    rel={
                      project.live !== "#" ? "noopener noreferrer" : undefined
                    }
                    className={`px-4 py-2 border rounded-lg text-sm font-medium transition ${
                      project.live !== "#"
                        ? "border-a text-a hover:bg-a hover:text-bg"
                        : "border-gray-500 text-gray-400 cursor-not-allowed opacity-50"
                    }`}
                    onClick={
                      project.live === "#"
                        ? (e) => e.preventDefault()
                        : undefined
                    }
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
