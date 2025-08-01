import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import { personalInfo } from "../../data/portfolio";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Refs for animations
  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef([]);
  const socialLinksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const backgroundRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: personalInfo.github, label: "GitHub" },
    { icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: "Email" },
  ];

  useEffect(() => {
    const initAnimations = () => {

      // Initial states
      gsap.set(headerRef.current, { y: -80, opacity: 0, scale: 0.9 });
      gsap.set(logoRef.current, { scale: 0, rotation: -120 });
      gsap.set(navItemsRef.current, { y: -20, opacity: 0 });
      gsap.set(socialLinksRef.current, { scale: 0, rotation: 90 });

      // Faster entrance timeline
      const tl = gsap.timeline({ delay: 0.2 }); // smaller delay

      tl.to(headerRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6, // was 1.2
        ease: "power3.out",
      })
        .to(
          logoRef.current,
          {
            scale: 1,
            rotation: 0,
            duration: 0.4, // was 0.8
            ease: "back.out(1.4)",
          },
          "-=0.4"
        ) // starts earlier
        .to(
          navItemsRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.4, // was 0.6
            stagger: 0.08, // faster stagger
            ease: "power2.out",
          },
          "-=0.3"
        )
        .to(
          socialLinksRef.current,
          {
            scale: 1,
            rotation: 0,
            duration: 0.3, // was 0.5
            stagger: 0.08,
            ease: "back.out(1.4)",
          },
          "-=0.25"
        );

      setupScrollAnimations();
      setupHoverAnimations();
    };

    initAnimations();
  }, []);

  const setupScrollAnimations = () => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);

        gsap.to(backgroundRef.current, {
          backgroundColor: shouldBeScrolled
            ? "rgba(9, 8, 7, 0.95)"
            : "rgba(9, 8, 7, 0.80)",
          borderColor: shouldBeScrolled
            ? "rgba(86, 92, 69, 0.5)"
            : "rgba(86, 92, 69, 0.3)",
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(headerRef.current, {
          scale: shouldBeScrolled ? 0.95 : 1,
          y: shouldBeScrolled ? 8 : 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  };

  const setupHoverAnimations = () => {
    // Nav item hover
    navItemsRef.current.forEach((item) => {
      if (!item) return;
      const underline = item.querySelector(".nav-underline");

      item.addEventListener("mouseenter", () => {
        gsap.to(item, { y: -2, duration: 0.3, ease: "power2.out" });
        gsap.to(underline, { scaleX: 1, duration: 0.3, ease: "power2.out" });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
        if (!item.classList.contains("active")) {
          gsap.to(underline, { scaleX: 0, duration: 0.3, ease: "power2.out" });
        }
      });
    });

    // Social links hover
    socialLinksRef.current.forEach((link) => {
      if (!link) return;

      link.addEventListener("mouseenter", () => {
        gsap.to(link, {
          scale: 1.2,
          rotation: 10,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });

      link.addEventListener("mouseleave", () => {
        gsap.to(link, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "back.out(1.7)",
        });
      });
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);

    if (newState) {
      gsap.set(mobileMenuRef.current, { display: "block" });
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
      gsap.fromTo(
        ".mobile-nav-item",
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.3, stagger: 0.1, delay: 0.1 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.2,
        onComplete: () => gsap.set(mobileMenuRef.current, { display: "none" }),
      });
    }
  };

  const handleNavClick = (href, itemName) => {
    setActiveSection(itemName.toLowerCase());
    const targetElement = document.querySelector(href);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: targetElement,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
    if (isMenuOpen) toggleMobileMenu();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4"
      >
        <div className="bg-bg/80 text-txt relative px-6 py-4 rounded-4xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div
              ref={logoRef}
              className="cursor-pointer"
              onClick={() => handleNavClick("#home", "Home")}
            >
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center">
                  <span className="text-background font-bold text-xl">
                    {personalInfo.name.charAt(0)}
                    {personalInfo.name.split(" ")[1]?.charAt(0)}
                  </span>
                </div>
                <span className="font-bold text-xl text-primary">
                  Portfolio
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <button
                  key={item.name}
                  ref={(el) => (navItemsRef.current[index] = el)}
                  onClick={() => handleNavClick(item.href, item.name)}
                  className={`relative text-text/70 hover:text-text transition-colors duration-300 py-2 ${
                    activeSection === item.name.toLowerCase()
                      ? "active text-primary"
                      : ""
                  }`}
                >
                  {item.name}
                  <div
                    className={`nav-underline absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left ${
                      activeSection === item.name.toLowerCase()
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </nav>
            {/* Social Links + Mobile Button */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      ref={(el) => (socialLinksRef.current[index] = el)}
                      href={social.href}
                      className="p-2 rounded-lg bg-s/20 text-t/60 hover:text-p hover:bg-a/20 transition-all duration-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
              <button
                ref={hamburgerRef}
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-lg bg-s/20 text-text/70 hover:text-p transition-colors duration-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="fixed top-24 left-1/2 transform -translate-x-1/2 z-40 md:hidden w-full max-w-md px-4"
        style={{ display: "none" }}
      >
        <div className="bg-bg/90 backdrop-blur-xl border border-s/30 rounded-2xl shadow-2xl shadow-bg/40">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <button
                key={`mobile-${item.name}`}
                onClick={() => handleNavClick(item.href, item.name)}
                className={`mobile-nav-item block w-full text-left px-4 py-3 rounded-lg text-txt/70 hover:text-p hover:bg-a/10 transition-all duration-300 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-p bg-a/10"
                    : ""
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="flex justify-center space-x-4 pt-4 border-t border-s/20">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={`mobile-${social.label}`}
                    href={social.href}
                    className="p-3 rounded-lg bg-s/20 text-txt/60 hover:text-p hover:bg-a/20 transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
