"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "testimonials", "about"];
      const scrollPosition = window.scrollY;
      
      // If we're at the very top, always show home as active
      if (scrollPosition < 100) {
        setActiveSection("home");
        return;
      }
      
      let currentSection = "home";
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const offset = 150;
          
          // Check if section is in viewport
          if (rect.top <= offset && rect.bottom > offset) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    // Important: Call handleScroll immediately to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    console.log("Button clicked:", sectionId); // Debug log
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log("Element not found:", sectionId); // Debug log
    }
  };

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50 pointer-events-none">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur pointer-events-auto">
        <button 
          onClick={() => scrollToSection("home")}
          className={`nav-item ${activeSection === "home" ? "bg-white text-gray-900" : ""}`}
          type="button"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection("projects")}
          className={`nav-item ${activeSection === "projects" ? "bg-white text-gray-900" : ""}`}
          type="button"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection("testimonials")}
          className={`nav-item ${activeSection === "testimonials" ? "bg-white text-gray-900" : ""}`}
          type="button"
        >
          Achievement
        </button>
        <button 
          onClick={() => scrollToSection("about")}
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900" : ""}`}
          type="button"
        >
          About
        </button>
      </nav>
    </div>
  );
};
