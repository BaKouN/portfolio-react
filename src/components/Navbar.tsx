import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }) => {
  const [activeLink, setActiveLink] = useState("#home");

  const sections = [
    { id: "#home", label: "Accueil" },
    { id: "#about", label: "À propos" },
    { id: "#work", label: "Projets" },
    { id: "#reviews", label: "Retours" },
    { id: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Create ScrollTrigger instances for each section
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.id,
        start: "top center", // Start when the section top hits the center of the viewport
        end: "bottom center", // End when the section bottom hits the center
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
      });
    });

    // Cleanup ScrollTriggers on component unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setActiveLink(id);

    // Smooth scroll to the section using GSAP
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: id, offsetY: 50 }, // Adjust offsetY if you have a fixed navbar
    });
  };

  return (
    <>
      <nav className={"navbar " + (navOpen ? "active" : "")}>
        {sections.map(({ id, label }) => (
          <a
            href={id}
            key={id}
            className={`nav-link ${activeLink === id ? "active" : ""}`}
            onClick={(e) => handleScroll(e, id)}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Example sections */}
      <div id="home" style={{ height: "100vh", background: "#f0f0f0" }}>
        <h1>Accueil</h1>
      </div>
      <div id="about" style={{ height: "100vh", background: "#e0e0e0" }}>
        <h1>À propos</h1>
      </div>
      <div id="work" style={{ height: "100vh", background: "#d0d0d0" }}>
        <h1>Projets</h1>
      </div>
      <div id="reviews" style={{ height: "100vh", background: "#c0c0c0" }}>
        <h1>Retours</h1>
      </div>
      <div id="contact" style={{ height: "100vh", background: "#b0b0b0" }}>
        <h1>Contact</h1>
      </div>
    </>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;