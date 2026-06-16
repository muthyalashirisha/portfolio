import { useInView } from '../../hooks/useInView';
import './Reveal.css';

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as: Tag = 'div',
}) {
  const [ref, inView] = useInView({ threshold: 0.12 });

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${direction} ${inView ? 'reveal--visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
