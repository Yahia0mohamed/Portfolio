// src/components/About.jsx
import React, { useEffect, useRef } from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiTensorflow,
  SiDjango,
  SiFastapi,
  SiPytorch,
  SiHuggingface,
  SiScikitlearn,
  SiGithubactions
} from "react-icons/si";
import { gsap } from "gsap";
import { personalInfo } from "../../data/portfolio";

const skills = [
  // Frontend
  { icon: <FaReact />, label: "React" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiTailwindcss />, label: "Tailwind CSS" },
  { icon: <SiDart />, label: "Dart" },
  { icon: <SiFlutter />, label: "Flutter" },

  // Backend
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiFirebase />, label: "FireBase" },
  { icon: <SiMysql />, label: "MySQL" },
  { icon: <FaPython />, label: "Python" },
  { icon: <SiDjango />, label: "Django" },
  { icon: <SiDjango />, label: "DRF" },
  { icon: <SiFastapi />, label: "FastAPI" },

  // AI & ML
  { icon: <SiHuggingface />, label: "Hugging Face" },
  { icon: <SiPytorch />, label: "PyTorch" },
  { icon: <SiTensorflow />, label: "TensorFlow" },
  { icon: "🦙", label: "LLaMA Factory" },
  { icon: <SiScikitlearn />, label: "Scikit‑learn" },

  // Tools
  { icon: <FaGitAlt />, label: "Git" },
  { icon: <SiGithubactions />, label: "GitHub Actions" }
];

const About = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current = [];

    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );

    tl.fromTo(
      skillsRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)"
      },
      "-=0.4"
    );
  }, []);

  const addSkillRef = (el) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex flex-col justify-center items-center text-center sm:text-left bg-bg text-txt px-6 py-20"
    >
      {/* Text Section */}
      <div
        className="max-w-5xl"
        ref={textRef}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-p">About Me</h2>
        <p className="mt-4 text-txt leading-relaxed">
          I’m <span className="text-a font-semibold">{personalInfo.name}</span>, a passionate
          Junior Software Engineer with a strong focus on building impactful
          applications and exploring the cutting edge of Artificial Intelligence.
          My journey started with crafting responsive web applications using
          modern frontend technologies like <strong>React</strong> and <strong>Tailwind CSS</strong>,
          but quickly expanded into backend development with <strong>Django</strong>,
          <strong>DRF</strong>, and <strong>FastAPI</strong>.
          <br /><br />
          I’m deeply fascinated by AI & Machine Learning — especially natural
          language processing and computer vision. I’ve worked with frameworks
          like <strong>PyTorch</strong>, <strong>TensorFlow</strong>, and <strong>Scikit‑learn</strong>,
          and have hands‑on experience with <strong>Hugging Face</strong> and fine‑tuning
          large language models using <strong>LLaMA Factory</strong>.
          <br /><br />
          I love turning complex ideas into real, working solutions. Whether
          it’s building intelligent APIs, training AI models, or integrating
          cloud automation with <strong>GitHub Actions</strong>, my goal is always the same —
          to create software that’s not only functional but meaningful.
        </p>
      </div>

      {/* Skills Grid - Old Design Style */}
      <div className="mt-10 flex flex-wrap gap-4 justify-center max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={addSkillRef}
            className="flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-lg hover:bg-a hover:text-bg transition-colors"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
