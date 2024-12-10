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


/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);


/**
 * Components
 */
import ReviewCard from "./ReviewCard";
import { useTranslation } from 'react-i18next';

// ASK MENTOR: Is there a better way to sync ID with translation from a local dataset ?
const reviews = [
  {
    id: 'review-1',
    name: 'Farah Bakhouche',
    imgSrc: '/images/people/farah-bak.jpeg',
    company: 'PDG @Maevic France'
  },
  {
    id: 'review-2',
    name: 'Jonathan Garijo',
    imgSrc: '/images/people/jo-garijo.jpeg',
    company: 'Lead Dev @Michelin Digital'
  },
  {
    id: 'review-3',
    name: 'Joris Gundermann',
    imgSrc: '/images/people/joris-gundermann.jpeg',
    company: 'Dev Manager @SeLoger'
  },
  {
    id: 'review-4',
    name: 'Tori',
    imgSrc: '/images/people/tori.png',
    company: 'Manager @Old Loves'
  },
  {
    id: 'review-5',
    name: 'Swan',
    imgSrc: '/images/people/swanny.jpeg',
    company: 'CEO @Huelo bar'
  },
];


const Review = () => {
  const { t } = useTranslation()

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
          {reviews.map(({ id, name, imgSrc, company }) => (
            <ReviewCard
              key={id}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={ t(`reviews.${id}`)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Review