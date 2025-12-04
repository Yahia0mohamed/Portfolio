// src/components/WorkExperience.jsx
import React from "react";
import { experience } from "../../data/portfolio";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen bg-bg text-txt px-6 py-20 flex flex-col items-center"
    >
      <div className="max-w-5xl w-full text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-p">Work Experience</h2>
        <p className="mt-4 text-txt leading-relaxed">
          My professional journey and roles I have contributed to.
        </p>
      </div>

      <div className="relative max-w-4xl w-full before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2 before:bg-p before:w-1 before:h-full">
        {experience.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          
          return (
            <div
              key={idx}
              className={`mb-10 w-full flex justify-${isLeft ? "start" : "end"} relative`}
            >
              <div className={`w-full md:w-1/2 px-4 ${!isLeft ? "left-[450px]" : ""} relative`}>
                <div className="bg-secondary/20 p-6 rounded-lg transition-colors relative">
                  <span className="text-sm text-s font-bold">{exp.period}</span>
                  <h3 className="mt-2 font-bold text-lg">{exp.role}</h3>
                  <h4 className="text-md font-semibold text-a">{exp.company}</h4>
                  <p className="mt-2 text-sm">{exp.description}</p>
                </div>
              </div>
              {/* Circle on the timeline */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-p rounded-full top-6"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperience;
