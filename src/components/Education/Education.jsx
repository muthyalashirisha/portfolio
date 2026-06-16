import { education } from '../../data/portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import Reveal from '../Reveal/Reveal';
import TiltCard from '../TiltCard/TiltCard';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <SectionHeader prompt="cat education.json" title="Education" />

        <div className="education__grid">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 120} direction={i % 2 === 0 ? 'left' : 'right'}>
              <TiltCard className="education__card">
                <h3 className="education__degree">{item.degree}</h3>
                <p className="education__institution">{item.institution}</p>
                <div className="education__meta">
                  <span className="education__period">{item.period}</span>
                  <span className="education__cgpa">CGPA {item.cgpa}</span>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
