"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

/* Reveal-on-scroll wrapper. The stagger lives in CSS transition-delay, so we
   only ever flip a single class — robust and cheap. Uses IntersectionObserver. */
export default function Reveal({
  children,
  as,
  delay = 0,
  className = "",
  style,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReduced()) {
      el.classList.add("in");
      return;
    }
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = (as || "div") as ElementType;
  const merged: CSSProperties = { ...(delay ? { transitionDelay: `${delay}ms` } : {}), ...style };
  return (
    <Tag ref={ref} className={`reveal ${className}`.trim()} style={merged} {...rest}>
      {children}
    </Tag>
  );
}
