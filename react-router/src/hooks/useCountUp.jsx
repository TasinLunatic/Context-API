import { useRef, useState, useEffect } from "react";

export default function useCountUp(target, { duration = 1200, decimals = 0 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;
          if (prefersReduced) {
            setValue(target);
            return;
          }
          const start = performance.now();
          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setValue(eased * target);
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration]);

  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString();
  return [ref, display];
}
