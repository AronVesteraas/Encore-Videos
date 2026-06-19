import type { ReactNode, SVGProps } from "react";

/* Minimal line icons (stroke = currentColor). Simple geometric UI glyphs. */
const I: Record<string, ReactNode> = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  phone: <path d="M15.5 13.5c2-1 3-2.5 3.5-4.5l-3-1-1.2 2.2c-1.6-.8-2.9-2.1-3.7-3.7L13.3 5 12.3 2C8.8 2.6 6 5.6 6 9.4 6 14.7 9.3 18 14.6 18c.8 0 1.6-.1 2.4-.4" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M4 7l8 6 8-6" /></>,
  cal: <><rect x="3.5" y="4.5" width="17" height="16" rx="2.5" /><path d="M3.5 9h17M8 3v3M16 3v3" /></>,
  play: <path d="M8 5.5v13l11-6.5z" />,
  users: <><circle cx="9" cy="8" r="3.2" /><path d="M3.5 19c.4-3 2.8-5 5.5-5s5.1 2 5.5 5" /><path d="M16 5.5a3 3 0 0 1 0 5.8M17 14.5c2.2.5 3.8 2.2 4 4.5" /></>,
  handshake: <path d="M3 12l4-4 3 2 3-2 3 2 4-4M7 8l-3 4 3 3 2-2M17 8l3 4-3 3-3-3" />,
  broadcast: <><circle cx="12" cy="12" r="2.4" /><path d="M7.5 7.5a6 6 0 0 0 0 9M16.5 7.5a6 6 0 0 1 0 9M4.7 4.7a10 10 0 0 0 0 14.6M19.3 4.7a10 10 0 0 1 0 14.6" /></>,
  trend: <><path d="M3 17l6-6 4 4 7-8" /><path d="M16 7h5v5" /></>,
  check: <path d="M4 12l5 5 11-12" />,
  spark: <path d="M12 3l2 6 6 1-5 4 1.6 6L12 16.8 6.4 20 8 14 3 10l6-1z" />,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" /></>,
  zap: <path d="M13 2L4 14h7l-1 8 9-12h-7z" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.8 2.4 4 5.5 4 9s-1.2 6.6-4 9c-2.8-2.4-4-5.5-4-9s1.2-6.6 4-9z" /></>,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></>,
  moon: <path d="M20 13.5A8 8 0 1 1 10.5 4a6.5 6.5 0 0 0 9.5 9.5z" />,
  youtube: <><rect x="2.5" y="5.8" width="19" height="12.4" rx="4" /><path d="M10.2 9.1l4.8 2.9-4.8 2.9z" fill="currentColor" stroke="none" /></>,
  tiktok: <path fill="currentColor" stroke="none" d="M15.6 3h-2.25v12.2a2.42 2.42 0 1 1-2.05-2.39v-2.32a4.66 4.66 0 1 0 4.05 4.62V8.66a6.07 6.07 0 0 0 3.35 1.01V7.34A3.66 3.66 0 0 1 15.6 3z" />,
};

type IconProps = SVGProps<SVGSVGElement> & { name: string };

export default function Icon({ name, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"
         strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {I[name] || null}
    </svg>
  );
}
