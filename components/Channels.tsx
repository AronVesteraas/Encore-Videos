import Reveal from "./Reveal";
import Icon from "./Icon";
import { CHANNELS, type Channel } from "@/lib/data";

function ChannelCard({ c }: { c: Channel }) {
  return (
    <article className="ch-card">
      <div className="ch-top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="ch-av" src={c.avatar} alt={c.name} />
        <div>
          <div className="ch-name">{c.name}</div>
          <div className="ch-subs"><Icon name="users" />{c.subs} {c.unit || "Subscribers"}</div>
        </div>
      </div>
      <p className="ch-desc">{c.desc}</p>
      <div className="ch-foot">
        <span>{c.cat}</span>
        <span className="live">Active</span>
      </div>
    </article>
  );
}

export default function Channels() {
  // Duplicate the list once so the -50% marquee translate loops seamlessly.
  const rowA = [...CHANNELS, ...CHANNELS];
  return (
    <section className="section section--soft" id="channels">
      <div className="wrap">
        <Reveal className="sect-head center">
          <span className="eyebrow center">OUR PORTFOLIO</span>
          <h2 className="h-sect">Channels we Work/ed with</h2>
          <p className="lede">A growing roster of channels we build and manage end to end. Auto-scrolling preview — hover to pause.</p>
        </Reveal>
      </div>
      <div className="marquee-mask" style={{ marginTop: 44 }}>
        <div className="marquee-track marquee--a">
          {rowA.map((c, i) => <ChannelCard key={"a" + i} c={c} />)}
        </div>
      </div>
    </section>
  );
}
