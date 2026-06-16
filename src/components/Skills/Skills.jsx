import { useState } from 'react';
import { skillGroups } from '../../data/portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import Reveal from '../Reveal/Reveal';
import TiltCard from '../TiltCard/TiltCard';
import './Skills.css';

const filters = ['All', ...skillGroups.map((g) => g.title)];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('All');

  const visibleGroups =
    activeFilter === 'All'
      ? skillGroups
      : skillGroups.filter((g) => g.title === activeFilter);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <SectionHeader prompt="skills --list" title="Technical Skills" />

        <Reveal delay={100}>
          <div className="skills__filters" role="tablist" aria-label="Filter skills">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                className={`skills__filter ${activeFilter === filter ? 'skills__filter--active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="skills__grid">
          {visibleGroups.map((group, i) => (
            <Reveal key={group.title} delay={150 + i * 60} direction="scale" className="reveal--fill">
              <TiltCard className="skills__card">
                <h3 className="skills__card-title">{group.title}</h3>
                <ul className="skills__list">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={item.highlight ? 'skills__item skills__item--highlight' : 'skills__item'}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
