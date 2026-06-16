import { useState } from 'react';
import { employers } from '../../data/portfolio';
import SectionHeader from '../SectionHeader/SectionHeader';
import Reveal from '../Reveal/Reveal';
import './Experience.css';

function buildTimelineEntries() {
  return employers.flatMap((employer) => [
    {
      type: 'employer',
      id: `employer-${employer.company}`,
      company: employer.company,
      period: employer.period,
      badge: employer.badge,
    },
    ...employer.projects.map((project) => ({
      type: 'project',
      id: `project-${employer.company}-${project.name}`,
      employer: employer.company,
      ...project,
    })),
  ]);
}

const timelineEntries = buildTimelineEntries();
const defaultExpanded =
  timelineEntries.find((entry) => entry.type === 'project')?.id ?? null;

function TimelineProject({ entry, expanded, onToggle }) {
  const isOpen = expanded === entry.id;

  return (
    <li className={`experience__item experience__item--project ${isOpen ? 'experience__item--active' : ''}`}>
      <div className="experience__node experience__node--project" aria-hidden="true">
        <span className="experience__node-inner" />
      </div>

      <article className={`experience__card ${isOpen ? 'experience__card--expanded' : ''}`}>
        <button
          type="button"
          className="experience__card-toggle"
          onClick={() => onToggle(entry.id)}
          aria-expanded={isOpen}
        >
          <div className="experience__card-header">
            <div className="experience__card-title-block">
              <span className="experience__timeline-date">{entry.period}</span>
              <h4 className="experience__project-name">{entry.name}</h4>
              <span className="experience__employer-tag">{entry.employer}</span>
            </div>
            <div className="experience__meta">
              <span className="experience__role">{entry.role}</span>
              <span className={`experience__chevron ${isOpen ? 'experience__chevron--open' : ''}`}>▾</span>
            </div>
          </div>
        </button>

        <div className={`experience__card-body ${isOpen ? 'experience__card-body--open' : ''}`}>
          <div className="experience__card-content">
            <p className="experience__description">{entry.description}</p>
            <div className="experience__tags">
              {entry.tags.map((tag) => (
                <span key={tag} className="experience__tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export default function Experience() {
  const [expandedId, setExpandedId] = useState(defaultExpanded);

  const handleToggle = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <SectionHeader prompt="cat experience.log" title="Work Experience" />

        <Reveal delay={100}>
          <ol className="experience__timeline">
            {timelineEntries.map((entry, index) => {
              if (entry.type === 'employer') {
                return (
                  <li
                    key={entry.id}
                    className="experience__item experience__item--employer"
                    style={{ '--item-index': index }}
                  >
                    <div className="experience__node experience__node--employer" aria-hidden="true">
                      <span className="experience__node-inner" />
                    </div>
                    <div className="experience__employer-block">
                      <span className="experience__timeline-date">{entry.period}</span>
                      <h3 className="experience__company">{entry.company}</h3>
                      {entry.badge && (
                        <span className="experience__badge">{entry.badge}</span>
                      )}
                    </div>
                  </li>
                );
              }

              return (
                <TimelineProject
                  key={entry.id}
                  entry={entry}
                  expanded={expandedId}
                  onToggle={handleToggle}
                />
              );
            })}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
