// eslint-disable-next-line
// @ts-nocheck

// TODO: Rework this file !Important

/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = ({ navOpen }: { navOpen: bool }) => {
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = [
    { id: "#home", label: "Accueil" },
    { id: "#about", label: "À propos" },
    { id: "#work", label: "Projets" },
    { id: "#reviews", label: "Retours" },
    { id: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    // Create ScrollTrigger instances for each section
    navItems.forEach((section) => {
      ScrollTrigger.create({
        trigger: section.id,
        start: "top center", // Start when the section top hits the center of the viewport
        onEnter: () => setActiveLink(section.id),
        onEnterBack: () => setActiveLink(section.id),
      });
    });

    // Cleanup ScrollTriggers on component unmount
    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  function handleClick(e, id) {
    setActiveLink(id)

    gsap.to(window, { duration: 2, scrollTo: id })
  }

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          className={activeLink === id ? "nav-link active" : "nav-link"}
          onClick={(e) => handleClick(e, id)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;