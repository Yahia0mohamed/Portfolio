import React, { useEffect, useRef } from "react";
import { personalInfo } from "../../data/portfolio";
import { animateStaggerFadeUp, animateScaleIn } from "../../utils/animations";

const Hero = () => {
  const textRefs = useRef([]);
  const imageRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !textRefs.current.includes(el)) {
      textRefs.current.push(el);
    }
  };

  useEffect(() => {
    animateStaggerFadeUp(textRefs.current, 0.3, 0.2);
    animateScaleIn(imageRef.current, 0.5);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16 bg-bg text-txt px-4 sm:px-6 pt-24 md:pt-0"
    >
      {/* Text */}
      <div className="text-center md:text-left max-w-xl w-full">
        <h1
          ref={addToRefs}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-p"
        >
          Hi, I'm {personalInfo.name}
        </h1>
        <h2
          ref={addToRefs}
          className="text-base sm:text-lg md:text-2xl mt-3 text-a"
        >
          {personalInfo.role}
        </h2>
        <p
          ref={addToRefs}
          className="mt-4 text-sm sm:text-base text-s leading-relaxed"
        >
          {personalInfo.bio}
        </p>

        {/* Action Buttons */}
        <div
          ref={addToRefs}
          className="mt-6 flex flex-row sm:flex-row flex-wrap items-center justify-center md:justify-start gap-3"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="px-4 py-2 sm:px-6 sm:py-3 bg-a text-bg rounded-lg font-semibold text-sm sm:text-base hover:bg-p transition-colors"
          >
            Contact Me
          </a>

          <a
            href={personalInfo.cv}
            download
            className="flex items-center gap-2 px-3 py-2 sm:px-5 sm:py-3 bg-p text-bg rounded-lg font-semibold text-sm sm:text-base hover:bg-a transition"
          >
            My Resume
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex-shrink-0">
        <img
          ref={imageRef}
          src={personalInfo.image}
          alt={personalInfo.name}
          className="w-50 h-50 sm:w-60 sm:h-60 md:w-[400px] md:h-[400px] rounded-full object-cover shadow-lg border-4 border-p"
        />
      </div>
    </section>
  );
};

export default Hero;
