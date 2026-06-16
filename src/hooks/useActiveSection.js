import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const onScroll = () => {
      const offset = window.innerHeight * 0.35;
      let current = sectionIds[0];

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= offset) {
          current = section.id;
        }
      }

      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds]);

  return active;
}
