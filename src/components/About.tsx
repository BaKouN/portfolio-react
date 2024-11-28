/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react'

const aboutItems = [
  {
    label: "Années de passion",
    number: 20
  },
  {
    label: "Années d'XP pro",
    number: 3
  }
];


const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Bienvenue, je suis Haroun, développeur Front-End passionné. J’adore transformer des visions en réalités numériques, en créant des expériences web intuitives et performantes grâce à React, JavaScript et des technologies modernes.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-tobacco-brown-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
              src="/images/logo-v1.png"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About