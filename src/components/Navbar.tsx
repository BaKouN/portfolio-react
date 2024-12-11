import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTranslation } from "react-i18next";


gsap.registerPlugin(useGSAP,ScrollTrigger, ScrollToPlugin);

const Navbar = ({ navOpen }: { navOpen: boolean }) => {
  const [activeLink, setActiveLink] = useState("#home");
  const ignoreScrollTrigger = useRef(false);

  const { t } = useTranslation()

  const navItems = [
    { id: "#home", label: "home" },
    { id: "#about", label: "about" },
    { id: "#work", label: "projects" },
    { id: "#reviews", label: "reviews" },
    { id: "#contact", label: "contact" },
  ];

  useGSAP(() => {
    navItems.map((section) =>
      ScrollTrigger.create({
        trigger: section.id,
        start: "top 10%",
        end: "bottom 50%",
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
    ignoreScrollTrigger.current = true;
    setActiveLink(id);

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
          {t(`nav.${label}`)}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;