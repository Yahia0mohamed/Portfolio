import { gsap } from "gsap";

export const animateStaggerFadeUp = (elements, delay = 0.3, stagger = 0.2) => {
  if (!elements || elements.length === 0) return;
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 0.8, stagger, delay, ease: "power3.out" }
  );
};

export const animateScaleIn = (element, delay = 0.3) => {
  if (!element) return;
  gsap.fromTo(
    element,
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, duration: 1, delay, ease: "back.out(1.7)" }
  );
};
