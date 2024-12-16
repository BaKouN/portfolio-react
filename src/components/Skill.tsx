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
import { useTranslation } from 'react-i18next';


const skillItem = [
  {
    imgSrc: '/images/tools/figma.svg',
    label: 'Figma',
    desc: 'designTool'
  },
  {
    imgSrc: '/images/tools/javascript.svg',
    label: 'JavaScript',
    desc: 'interaction'
  },
  {
    imgSrc: '/images/tools/react.svg',
    label: 'React',
    desc: 'framework'
  },
  {
    imgSrc: '/images/tools/css3.svg',
    label: 'CSS',
    desc: 'userInterface'
  },
  {
    imgSrc: '/images/tools/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'userInterface'
  },
  {
    imgSrc: '/images/tools/nodejs.svg',
    label: 'NodeJS',
    desc: 'webServer'
  },
  {
    imgSrc: '/images/tools/nestjs.svg',
    label: 'NestJS',
    desc: 'nodeFramework'
  },
  {
    imgSrc: '/images/tools/mongodb.svg',
    label: 'MongoDB',
    desc: 'database'
  },
];


const Skill = () => {
  const { t } = useTranslation()

  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          { t('skills.title')}
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
          { t('skills.description')}
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={ t(`skills.categories.${desc}`)}
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