/* Channel + content data — placeholder, easily replaceable.
   To drop in a real profile picture, set a channel's `avatar` to an image URL or
   a path under /public (e.g. "/avatars/andreas.jpg"). Until then a branded
   gradient + initials avatar is generated and shown. */

export const CALENDLY = "https://calendly.com/aronvest-productions/30min";
export const EMAIL = "aronvest.productions@gmail.com";

export type SocialPlatform = "youtube" | "tiktok" | "instagram" | "x" | "spotify";
export type Social = { platform: SocialPlatform; url: string };

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
  socials: Social[];
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
  { id: "chan-clipverse", name: "Andreas Eskander", subs: "13.8M", avatar: "/avatars/andreas.jpg", desc: "", initials: "AE", c1: "#5ad1ff", c2: "#1273ff", grad: "linear-gradient(135deg,#5ad1ff,#1273ff)", cat: "Vlogs", socials: [
    { platform: "youtube", url: "https://www.youtube.com/@AndreasEskander/featured" },
  ] },
  { id: "chan-mindbites", name: "Eirik Dalen", subs: "160K", avatar: "/avatars/eirik.jpg", desc: "", initials: "ED", c1: "#2e8bff", c2: "#0a3aa0", grad: "linear-gradient(135deg,#2e8bff,#0a3aa0)", cat: "Vlogs", socials: [
    { platform: "youtube", url: "https://www.youtube.com/@Eirik_Dal1" },
  ] },
  { id: "chan-cozy", name: "Henrik Oven", subs: "350K", unit: "Followers", avatar: "/avatars/henrik.jpg", desc: "", initials: "HO", c1: "#7db8ff", c2: "#1273ff", grad: "linear-gradient(135deg,#7db8ff,#1273ff)", cat: "Vlogs", socials: [
    { platform: "tiktok", url: "https://www.tiktok.com/@groggymenn2" },
    { platform: "youtube", url: "https://www.youtube.com/@henrikoven1/featured" },
  ] },
];

export const CHANNELS: Channel[] = RAW_CHANNELS.map((c) => ({
  ...c,
  avatar: c.avatar || avatarSrc(c.initials, c.c1, c.c2),
}));

export type Step = { n: string; icon: string; title: string; body: string };

export const STEPS: Step[] = [
  { n: "01", icon: "handshake", title: "Creator Partnership", body: "We partner with you and get access to your existing content library. No new filming, no new edits. We work with what you already have." },
  { n: "02", icon: "broadcast", title: "Channel Management & Publishing", body: "Our team builds, manages, and publishes compilation channels around your content — handling strategy, editing, thumbnail design, and optimization end to end." },
  { n: "03", icon: "trend", title: "Revenue Growth", body: "Your library starts working for you. Watch a brand-new, fully managed revenue stream grow, with zero extra work on your end." },
];

export type RevStat = { v: string; l: string };

export const REV_STATS: RevStat[] = [
  { v: "3", l: "Channels managed" },
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
