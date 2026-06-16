import { useEffect, useState } from 'react';

export function useCountUp(end, { duration = 1500, start = 0, active = false }) {
  const [value, setValue] = useState(start);

  useEffect(() => {
    if (!active) return undefined;

    let frame;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [end, duration, start, active]);

  return value;
}
