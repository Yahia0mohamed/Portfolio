import React, { useEffect, useRef } from "react";
import { personalInfo } from "../../data/portfolio";
import { gsap } from "gsap";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const footerRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    linksRef.current = []; // reset refs

    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      linksRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.7)", delay: 0.3 }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  return (
    <footer
      ref={footerRef}
      className="bg-bg border-t border-secondary/30 text-txt py-8"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-secondary">
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            ref={addToRefs}
            href={`mailto:${personalInfo.email}`}
            className="p-2 rounded-full bg-a text-bg hover:bg-p transition"
          >
            <Mail size={18} />
          </a>
          <a
            ref={addToRefs}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-a text-a hover:bg-a hover:text-bg transition"
          >
            <Github size={18} />
          </a>
          <a
            ref={addToRefs}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-a text-a hover:bg-a hover:text-bg transition"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
