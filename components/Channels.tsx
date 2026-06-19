import Reveal from "./Reveal";
import Icon from "./Icon";
import { CHANNELS, type Channel } from "@/lib/data";

const SOCIAL_LABEL: Record<string, string> = {
  youtube: "YouTube",
  tiktok: "TikTok",
  instagram: "Instagram",
  x: "X",
  spotify: "Spotify",
};

function ChannelCard({ c, ariaHidden }: { c: Channel; ariaHidden?: boolean }) {
  return (
    <article className="ch-card" aria-hidden={ariaHidden || undefined}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="ch-av" src={c.avatar} alt={ariaHidden ? "" : c.name} />
      <div className="ch-main">
        <div className="ch-name">{c.name}</div>
        <div className="ch-niche">{c.cat}</div>
        {c.socials.length > 0 && (
          <div className="ch-socials">
            {c.socials.map((s) => (
              <a
                key={s.platform}
                className="ch-soc"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={ariaHidden ? -1 : undefined}
                aria-label={`${c.name} on ${SOCIAL_LABEL[s.platform] || s.platform}`}
                title={SOCIAL_LABEL[s.platform] || s.platform}
              >
                <Icon name={s.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="ch-count">
        <div className="ch-count-v tnum">{c.subs}</div>
        <div className="ch-count-l">{c.unit || "Subscribers"}</div>
      </div>
    </article>
  );
}

export default function Channels() {
  // Repeat the roster so each half of the strip is wider than any viewport — this
  // keeps the -50% loop seamless with no trailing gap, even with only a few channels.
  // The strip is two identical halves (REPEAT must be even).
  const REPEAT = 6;
  const loop = Array.from({ length: REPEAT }, () => CHANNELS).flat();
  return (
    <section className="section section--soft" id="channels">
      <div className="wrap">
        <Reveal className="sect-head center">
          <span className="eyebrow center">Our Portfolio</span>
          <h2 className="h-sect">Channels we work with</h2>
          <p className="lede">A growing roster of channels we help build, grow, and manage.</p>
        </Reveal>
      </div>
      <div className="marquee-mask" style={{ marginTop: 48 }}>
        <div className="marquee-track marquee--a">
          {loop.map((c, i) => (
            <ChannelCard key={c.id + "-" + i} c={c} ariaHidden={i >= CHANNELS.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
