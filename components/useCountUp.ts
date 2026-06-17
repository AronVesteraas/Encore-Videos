"use client";

import { useEffect, useRef, useState } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type Options = { duration?: number; prefix?: string; suffix?: string };

/* Count-up that fires once when the element enters the viewport. */
export function useCountUp(
  target: number,
  { duration = 2000, prefix = "", suffix = "" }: Options = {}
): [React.RefObject<HTMLDivElement | null>, string] {
  const ref = useRef<HTMLDivElement>(null);
  const [text, setText] = useState(prefix + "0" + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (n: number) => prefix + Math.round(n).toLocaleString("en-US") + suffix;
    if (prefersReduced()) {
      setText(fmt(target));
      return;
    }

    let raf = 0;
    const run = () => {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setText(fmt(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [target, duration, prefix, suffix]);

  return [ref, text];
}
