/**
 * @Copyright 2024 haroun.b
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    imgSrc: '/images/projects/michelin-logo.jpg',
    title: 'Michelin B2C',
    tags: ['Frontend', '2+ years', 'CI/CD'],
    projectLink: 'https://www.michelin.com.au/'
  },
  {
    imgSrc: '/images/projects/velor.png',
    title: "Vel'or",
    tags: ['API', 'SPA', 'Maps'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/escape.png',
    title: "Online Escape Room",
    tags: ['GSAP', 'Creative Dev'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/opc.png',
    title: 'Blog PHP',
    tags: ['PHP', 'MVC', 'Projet Etudiant'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/portfolio.png',
    title: 'Portfolio',
    tags: ['React', 'Tailwind'],
    projectLink: ''
  },
  {
    imgSrc: '/images/projects/scrimba.png',
    title: 'Certification Scrimba',
    tags: ['Online Course', 'React'],
    projectLink: ''
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          Mes projets pro/perso
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work