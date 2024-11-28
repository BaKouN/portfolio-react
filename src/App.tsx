/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

// TODO: Understand why the types don't work here.
// @ts-ignore 
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