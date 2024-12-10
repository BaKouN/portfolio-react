/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react'

/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    imgSrc: '/images/tools/figma.svg',
    label: 'Figma',
    desc: 'Outil de design'
  },
  {
    imgSrc: '/images/tools/javascript.svg',
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    imgSrc: '/images/tools/react.svg',
    label: 'React',
    desc: 'Framework'
  },
  {
    imgSrc: '/images/tools/css3.svg',
    label: 'CSS',
    desc: 'Interface utilisateur'
  },
  {
    imgSrc: '/images/tools/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Interface utilisateur'
  },
  {
    imgSrc: '/images/tools/nodejs.svg',
    label: 'NodeJS',
    desc: 'Serveur web'
  },
  {
    imgSrc: '/images/tools/nestjs.svg',
    label: 'NestJS',
    desc: 'Framework Node'
  },
  {
    imgSrc: '/images/tools/mongodb.svg',
    label: 'MongoDB',
    desc: 'Base de données'
  },
];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Outils essentiels que j&apos;utilise
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          Découvrez les outils et technologies que j&apos;utilise pour créer des sites web et des applications exceptionnelles et performantes.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill