import { useTilt } from '../../hooks/useTilt';
import './TiltCard.css';

export default function TiltCard({ children, className = '' }) {
  const { ref, onMove, onLeave } = useTilt(10);

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="tilt-card__shine" />
      {children}
    </div>
  );
}
