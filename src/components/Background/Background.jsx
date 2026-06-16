import { useEffect, useRef } from 'react';
import './Background.css';

export default function Background() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return undefined;

    const onMove = (e) => {
      glow.style.setProperty('--x', `${e.clientX}px`);
      glow.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="background" aria-hidden="true">
      <div className="background__orb background__orb--1" />
      <div className="background__orb background__orb--2" />
      <div className="background__grid" />
      <div ref={glowRef} className="background__glow" />
      <div className="background__scanlines" />
    </div>
  );
}
