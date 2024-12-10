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
import { ButtonPrimary, ButtonOutline } from "./Button";


const Hero = () => {
  return (
    <section
      id="home"
      className="pt-28 lg:pt-36"
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">

        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar.jpeg"
                width={40}
                height={40}
                alt="Haroun Bakhouche portrait"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>

              Disponible maintenant
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
            Haroun Bakhouche. Développeur, Designer, Passioné.
          </h2>

          <div className="flex items-center gap-3">
            <ButtonPrimary
              label="Télécharger CV"
              icon="download"
              href="https://drive.google.com/file/d/1GyrSOH-P3ZbItuYxoZIxwUGJ1B-QH10q/view?usp=sharing"
              target="_blank"
            />

            <ButtonOutline
              href="#about"
              label="Scroll"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-tobacco-brown-400 via-25% via-tobacco-brown-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/avatar-bw.png"
              width={656}
              height={800}
              alt="Haroun Bakhouche"
              className="w-full"
            />
          </figure>
        </div>

      </div>

    </section>
  )
}

export default Hero