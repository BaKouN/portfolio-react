import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollToPlugin);

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const [activeLink, setActiveLink] = useState("#home");
  const ignoreScrollTrigger = useRef(false);

  const navItems = [
    { id: "#home", label: "Accueil" },
    { id: "#about", label: "À propos" },
    { id: "#work", label: "Projets" },
    { id: "#reviews", label: "Retours" },
    { id: "#contact", label: "Contact" },
  ];

  useGSAP(() => {
    navItems.map((section) =>
      ScrollTrigger.create({
        trigger: section.id,
        start: "top 10%",
        end: "bottom 50%",
        scrub:true,
        markers: true,
        onEnter: () => {
          if (!ignoreScrollTrigger.current) {
            setActiveLink(section.id);
          }
        },
        onEnterBack: () => {
          if (!ignoreScrollTrigger.current) {
            setActiveLink(section.id);
          }
        },
      })
    );

  }, []);

  const handleNavClick = (id: string) => {
    setActiveLink(id);
    ignoreScrollTrigger.current = true;

    gsap.to(window, {
      duration: 1,
      scrollTo: id,
      onComplete: () => {
        setTimeout(() => (ignoreScrollTrigger.current = false), 200);
      },
    });
  };

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ id, label }) => (
        <a
          href={id}
          key={id}
          className={`nav-link ${activeLink === id ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(id);
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;