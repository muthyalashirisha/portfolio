import { achievements, certifications } from '../../data/portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import Reveal from '../Reveal/Reveal';
import TiltCard from '../TiltCard/TiltCard';
import './Achievements.css';

export default function Achievements() {
  return (
    <section id="achievements" className="achievements section">
      <div className="container">
        <SectionHeader prompt="grep -i award *" title="Achievements & Certifications" />

        <div className="achievements__highlights">
          {achievements.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} direction="scale">
              <TiltCard className="achievements__card">
                <div className="achievements__icon">★</div>
                <h3 className="achievements__card-title">{item.title}</h3>
                <p className="achievements__card-detail">{item.detail}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={350}>
          <div className="achievements__certs">
            <h3 className="achievements__certs-title">$ certifications --list</h3>
            <ul className="achievements__cert-list">
              {certifications.map((cert, i) => (
                <li
                  key={cert.name}
                  className="achievements__cert"
                  style={{ '--cert-delay': `${i * 80}ms` }}
                >
                  <span className="achievements__cert-name">{cert.name}</span>
                  <span className="achievements__cert-issuer">{cert.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
