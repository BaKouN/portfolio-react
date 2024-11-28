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


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";


const reviews = [
  {
    content: 'Sa capacité à gérer des détails importants tout en respectant les délais est impressionnante. Une ressource de confiance.',
    name: 'Farah Bakhouche',
    imgSrc: '/images/people/farah-bak.jpeg',
    company: 'PDG @Maevic France'
  },
  {
    content: "Haroun est un excellent développeur qui m'a démontré ses capacités d'apprentissage et d'adaptation au cours de sa mission chez Michelin.",
    name: 'Jonathan Garijo',
    imgSrc: '/images/people/jo-garijo.jpeg',
    company: 'Lead Dev @Michelin Digital'
  },
  {
    content: "Haroun a une capacité remarquable à trouver des solutions pragmatiques aux problèmes qu'il rencontre.",
    name: 'Joris Gundermann',
    imgSrc: '/images/people/joris-gundermann.jpeg',
    company: 'Dev Manager @SeLoger'
  },
  {
    content: 'C’était un collègue sur qui je pouvais compter, même dans les situations les plus stressantes.',
    name: 'Tori',
    imgSrc: '/images/people/tori.png',
    company: 'Manager @Old Loves'
  },
  {
    content: 'Haroun a démontré une adaptabilité incroyable, prenant rapidement ses marques dans un environnement exigeant et haut de gamme.',
    name: 'Swan ',
    imgSrc: '/images/people/swanny.jpeg',
    company: 'CEO @Huelo bar'
  },
];


const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-100% 80%',
        end: '700% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });

  return (
    <section
      id="reviews"
      className="section overflow-hidden"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Ils parlent de moi
        </h2>

        <div className="scrub-slide flex items-stretch gap-3 w-fit">
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review