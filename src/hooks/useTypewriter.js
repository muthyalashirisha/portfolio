import { useEffect, useState } from 'react';

export function useTypewriter(words, { speed = 70, deleteSpeed = 40, pause = 2000 } = {}) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return undefined;

    const current = words[wordIndex % words.length];
    const delay = isDeleting ? deleteSpeed : speed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          if (words.length === 1) return;
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, speed, deleteSpeed, pause]);

  return text;
}
