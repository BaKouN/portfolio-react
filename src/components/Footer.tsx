/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import React from 'react'
import { useTranslation } from 'react-i18next';

/**
 * Components
 */
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'home',
    href: '#home'
  },
  {
    label: 'about',
    href: '#about'
  },
  {
    label: 'work',
    href: '#work'
  },
  {
    label: 'reviews',
    href: '#reviews'
  },
  {
    label: 'contact',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/bakoun'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/haroun-bakhouche/'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/haroun.b'
  },
];


const Footer = () => {
  const { t } = useTranslation() 

  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              { t('footer.ambitiousProject') }
            </h2>

            <ButtonPrimary
              href="mailto:haroun.bakhouche.hb@gmail.com"
              label={ t('footer.letsDiscuss') }
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">
                { t('footer.sitemap') }
              </p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {t(`footer.links.${label}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">
              { t('footer.socials') }
              </p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up" 
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a
            href="/"
            className="logo reveal-up"
          >
            <img
              src="/images/logo-v1.png"
              width={40}
              height={40}
              alt="Logo"
            />
          </a>

          <p className="text-zinc-500 text-sm reveal-up max-w-[80%]">
            &copy; 2024 <span className="text-zinc-200">{ t('footer.copyright') }</span>
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer