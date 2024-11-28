/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// @ts-expect-error lenis/react type definition exist but doesn't seem to link
import { ReactLenis } from 'lenis/react';

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import Header from '@components/Header';
import Hero from '@components/Hero';
import About from '@components/About';
import Skill from '@components/Skill';
import Work from '@components/Work';
import Review from '@components/Review';
import Contact from "@components/Contact"
import Footer from "@components/Footer";


const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray<HTMLElement>('.reveal-up');

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: '-200 bottom',
          end: 'bottom 80%',
          scrub: true
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      })
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )

}

export default App;