import { profile, stats } from '../../data/portfolio';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from '../../hooks/useCountUp';
import Reveal from '../Reveal/Reveal';
import './Hero.css';

function StatBlock({ value, suffix, label, delay }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const count = useCountUp(value, { active: inView, duration: 1800 });

  return (
    <Reveal as="div" delay={delay} className="hero__stat-wrap">
      <div ref={ref} className="hero__stat">
        <span className="hero__stat-value">
          {count}
          {suffix}
        </span>
        <span className="hero__stat-label">{label}</span>
      </div>
    </Reveal>
  );
}

export default function Hero() {
  const typedRole = useTypewriter(profile.roles, { speed: 65, deleteSpeed: 35, pause: 2200 });

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <Reveal delay={0}>
          <div className="hero__terminal">
            <div className="hero__terminal-bar">
              <span className="hero__dot hero__dot--red" />
              <span className="hero__dot hero__dot--yellow" />
              <span className="hero__dot hero__dot--green" />
              <span className="hero__terminal-title">shirisha@portfolio ~</span>
            </div>
            <div className="hero__terminal-body">
              <p className="hero__eyebrow">
                <span className="hero__prompt">$</span> whoami
              </p>

              <h1 className="hero__name">
                {profile.firstName}{' '}
                <span className="hero__name-accent">{profile.lastName}</span>
              </h1>

              <p className="hero__role">
                <span className="hero__prompt">{'>'}</span>{' '}
                {typedRole}
                <span className="hero__cursor" aria-hidden="true" />
              </p>

              <p className="hero__summary">{profile.summary}</p>

              <div className="hero__stats">
                {stats.map(({ value, suffix, label }, i) => (
                  <StatBlock
                    key={label}
                    value={value}
                    suffix={suffix}
                    label={label}
                    delay={200 + i * 100}
                  />
                ))}
              </div>

              <div className="hero__actions">
                <a href="#experience" className="hero__btn hero__btn--primary">
                  <span>View Experience</span>
                  <span className="hero__btn-arrow">→</span>
                </a>
                <a
                  href={`${import.meta.env.BASE_URL}Shirisha_M.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__btn hero__btn--secondary"
                >
                  <span>View Resume</span>
                </a>
                <a href="#contact" className="hero__btn hero__btn--secondary">
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
