/* Channel + content data — placeholder, easily replaceable.
   To drop in a real profile picture, set a channel's `avatar` to an image URL or
   a path under /public (e.g. "/avatars/andreas.jpg"). Until then a branded
   gradient + initials avatar is generated and shown. */

export const CALENDLY = "https://calendly.com/aronvest-productions/30min";
export const EMAIL = "aron@encorevideos.com";

export type Channel = {
  id: string;
  name: string;
  subs: string;
  unit?: string;
  desc: string;
  initials: string;
  c1: string;
  c2: string;
  grad: string;
  cat: string;
  avatar: string;
};

function avatarSrc(initials: string, c1: string, c2: string): string {
  const svg =
    '<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">' +
    '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">' +
    '<stop offset="0" stop-color="' + c1 + '"/><stop offset="1" stop-color="' + c2 + '"/>' +
    '</linearGradient></defs><rect width="120" height="120" fill="url(#g)"/>' +
    '<text x="60" y="62" font-family="Space Grotesk, system-ui, sans-serif" font-size="46" ' +
    'font-weight="700" fill="#fff" text-anchor="middle" dominant-baseline="central" ' +
    'letter-spacing="-1">' + initials + '</text></svg>';
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

type RawChannel = Omit<Channel, "avatar"> & { avatar?: string };

const RAW_CHANNELS: RawChannel[] = [
  { id: "chan-daily-laugh", name: "Daily Laugh Reel", subs: "1.2M", desc: "The best comedy moments from across the web, compiled fresh every single day.", initials: "DL", c1: "#36a6ff", c2: "#0a52d8", grad: "linear-gradient(135deg,#36a6ff,#0a52d8)", cat: "Comedy" },
  { id: "chan-clipverse", name: "Andreas Eskander", subs: "13.8M", desc: "Viral clips from the world's top streamers, cut and curated for binge watching.", initials: "AE", c1: "#5ad1ff", c2: "#1273ff", grad: "linear-gradient(135deg,#5ad1ff,#1273ff)", cat: "Gaming" },
  { id: "chan-mindbites", name: "Eirik Dalen", subs: "160K", desc: "Bite-sized knowledge compilations that turn long-form lessons into quick hits.", initials: "ED", c1: "#2e8bff", c2: "#0a3aa0", grad: "linear-gradient(135deg,#2e8bff,#0a3aa0)", cat: "Education" },
  { id: "chan-hype", name: "TilouToons", subs: "163K", desc: "Sports and gaming highlights packaged into daily adrenaline-fueled compilations.", initials: "TT", c1: "#49b6ff", c2: "#0e5ed8", grad: "linear-gradient(135deg,#49b6ff,#0e5ed8)", cat: "Sports" },
  { id: "chan-cozy", name: "Henrik Oven", subs: "350K", unit: "Followers", desc: "Relaxing, feel-good compilation moments designed to wind down and unwind to.", initials: "HO", c1: "#7db8ff", c2: "#1273ff", grad: "linear-gradient(135deg,#7db8ff,#1273ff)", cat: "Lifestyle" },
  { id: "chan-trend", name: "Viral Colors", subs: "142K", desc: "The internet's best trends, archived and re-cut into endlessly rewatchable reels.", initials: "VC", c1: "#36a6ff", c2: "#0a3aa0", grad: "linear-gradient(135deg,#36a6ff,#0a3aa0)", cat: "Trending" },
];

export const CHANNELS: Channel[] = RAW_CHANNELS.map((c) => ({
  ...c,
  avatar: c.avatar || avatarSrc(c.initials, c.c1, c.c2),
}));

export type Step = { n: string; icon: string; title: string; body: string };

export const STEPS: Step[] = [
  { n: "01", icon: "handshake", title: "Creator Partnership", body: "We partner with you and get access to your existing content library. No new filming, no new edits — we work with what you already have." },
  { n: "02", icon: "broadcast", title: "Channel Management & Publishing", body: "Our team builds, manages, and publishes compilation channels around your content — handling strategy, editing, scheduling, and optimization end to end." },
  { n: "03", icon: "trend", title: "Revenue Growth", body: "Your library starts working for you. Watch a brand-new, fully managed revenue stream grow — with zero extra work on your end." },
];

export type RevStat = { v: string; l: string };

export const REV_STATS: RevStat[] = [
  { v: "6", l: "Channels managed" },
  { v: "+15M", l: "Combined subscribers" },
  { v: "100%", l: "Creator-owned content" },
];

/* Featured "Trusted by creators" avatars: the 4 biggest channels by audience,
   ordered so the largest sits rightmost (closest to the text). */
function parseCount(s: string): number {
  const m = String(s).trim().match(/([\d.]+)\s*([KMB]?)/i);
  if (!m) return 0;
  const mult = ({ K: 1e3, M: 1e6, B: 1e9 } as Record<string, number>)[m[2].toUpperCase()] || 1;
  return parseFloat(m[1]) * mult;
}

export const TRUST_CREATORS: Channel[] = [...CHANNELS]
  .sort((a, b) => parseCount(b.subs) - parseCount(a.subs)) // biggest first
  .slice(0, 4)
  .reverse(); // render ascending so the biggest lands rightmost, next to the text
