import { useInView } from '../../hooks/useInView';
import './SectionHeader.css';

export default function SectionHeader({ prompt, title }) {
  const [ref, inView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className={`section-header ${inView ? 'section-header--visible' : ''}`}>
      <span className="section-header__prompt">$ {prompt}</span>
      <h2 className="section-header__title">{title}</h2>
      <span className="section-header__line" />
    </div>
  );
}
