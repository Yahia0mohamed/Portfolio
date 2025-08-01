import React, { useRef, useEffect } from "react";
import { personalInfo } from "../../data/portfolio";
import { gsap } from "gsap";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = []; // reset refs

    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      itemsRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3,
      }
    );
  }, []);

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📨 Message sent! (You can connect this to EmailJS or your backend)");
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-[70vh] flex flex-col justify-center items-center px-6 py-16 bg-bg text-txt"
    >
      <h2
        ref={addToRefs}
        className="text-4xl md:text-4xl font-bold text-p mb-4"
      >
        Let’s Connect
      </h2>
      <p ref={addToRefs} className="text-center text-s max-w-lg mb-8">
        I’m always open to discussing new opportunities, collaborations, or just
        talking tech. Drop me a message and let’s build something amazing.
      </p>

      {/* Contact Form */}
      <form
        ref={addToRefs}
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-secondary/20 p-6 rounded-lg shadow-lg border border-secondary/30"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-p">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg bg-bg text-txt border border-secondary/40 focus:border-a focus:outline-none"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-p">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 rounded-lg bg-bg text-txt border border-secondary/40 focus:border-a focus:outline-none"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-p">
            Message
          </label>
          <textarea
            required
            rows="5"
            className="w-full px-4 py-2 rounded-lg bg-bg text-txt border border-secondary/40 focus:border-a focus:outline-none"
            placeholder="Your message..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-a text-bg py-3 rounded-lg font-semibold hover:bg-p transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex flex-row gap-3 mt-8">
        <a
          ref={addToRefs}
          href={`mailto:${personalInfo.email}`}
          className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-a text-bg rounded-lg font-semibold text-sm sm:text-base hover:bg-p transition"
        >
          <Mail size={16} className="sm:w-5 sm:h-5" /> Email Me
        </a>

        <a
          ref={addToRefs}
          href={personalInfo.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 border border-a text-a rounded-lg font-semibold text-sm sm:text-base hover:bg-a hover:text-bg transition"
        >
          <Github size={16} className="sm:w-5 sm:h-5" /> GitHub
        </a>

        <a
          ref={addToRefs}
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 border border-a text-a rounded-lg font-semibold text-sm sm:text-base hover:bg-a hover:text-bg transition"
        >
          <Linkedin size={16} className="sm:w-5 sm:h-5" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Contact;
