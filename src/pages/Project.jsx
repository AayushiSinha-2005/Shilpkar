import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import SplitText from '../components/Animations/SplitText';
import AnimatedButton from '../components/Buttons/AnimatedButton';
import { projects } from '../data/content';
import './Project.css';

export default function Project() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [active, setActive] = useState(0);

  if (!project) {
    return (
      <section className="section container">
        <p className="eyebrow">Not Found</p>
        <h1 style={{ margin: '18px 0' }}>We couldn't find that project.</h1>
        <AnimatedButton to="/gallery">Back To Gallery</AnimatedButton>
      </section>
    );
  }

  const currentProjectIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentProjectIndex + 1) % projects.length];

  return (
    <div>
      {/* Fullscreen hero image */}
      <section className="project-hero">
        <img src={project.cover} alt={project.title} className="project-hero__img" />
        <div className="project-hero__scrim" />
        <div className="project-hero__content container">
          <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>{project.category} — {project.year}</p>
          <SplitText text={project.title} as="h1" className="project-hero__title" />
          <p className="project-hero__location">{project.location}</p>
        </div>
      </section>

      {/* Description + details */}
      <section className="section">
        <div className="container project-info">
          <div className="project-info__text">
            <p className="eyebrow">Overview</p>
            <SplitText text="About This Project" as="h2" className="section-title" />
            <p className="project-info__desc">{project.description}</p>
          </div>
          <div className="project-info__details">
            {Object.entries(project.details).map(([label, value]) => (
              <div className="project-info__row" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image slider */}
      <section className="section dark-section">
        <div className="container">
          <div className="section-head" style={{ marginBottom: 40 }}>
            <p className="eyebrow" style={{ color: 'var(--gold-soft)' }}>Walkthrough</p>
            <SplitText text="Inside The Space" as="h2" className="section-title" />
          </div>

          <div className="project-slider">
            <div className="project-slider__main">
              <img src={project.images[active]} alt={`${project.title} view ${active + 1}`} />
            </div>
            <div className="project-slider__thumbs">
              {project.images.map((img, i) => (
                <button
                  key={img}
                  className={`project-slider__thumb ${i === active ? 'is-active' : ''}`}
                  onClick={() => setActive(i)}
                  data-cursor="View"
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="section">
        <div className="container next-project">
          <p className="eyebrow">Next Project</p>
          <Link to={`/project/${nextProject.slug}`} className="next-project__link" data-cursor="Go">
            <SplitText text={nextProject.title} as="h2" className="next-project__title" />
          </Link>
        </div>
      </section>
    </div>
  );
}
