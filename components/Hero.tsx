import Reveal from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";
import { TRUST_CREATORS, type Channel } from "@/lib/data";

function HeroBg() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <div className="grid-fade"></div>
      <div className="blob blob--1"></div>
      <div className="blob blob--2"></div>
    </div>
  );
}

function TrustAvatar({ c }: { c: Channel }) {
  return (
    <div className="trust-av-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="trust-av" src={c.avatar} alt={c.name} />
      <span className="trust-tip" role="tooltip">
        <b>{c.name}</b>
        <i>{c.subs} {c.unit || "Subscribers"}</i>
      </span>
    </div>
  );
}

function HeroCopy() {
  return (
    <div className="hero-copy">
      <Reveal className="pill">Compilation channels, fully managed <span className="tag">For creators</span></Reveal>
      <Reveal as="h1" className="h-display" delay={60}>
        Turn your content into <span className="x" style={{ color: "var(--blue)" }}>additional revenue</span>
      </Reveal>
      <Reveal as="p" className="lede" delay={120}>
        Additional revenue from content you already made.
      </Reveal>
      <Reveal className="hero-ctas" delay={180}>
        <Button variant="primary" size="lg" href="#book" icon="phone">Book a Call</Button>
        <Button variant="ghost" size="lg" href="#contact">Contact Us</Button>
      </Reveal>
      <Reveal className="hero-trust" delay={240}>
        <div className="avs">
          {TRUST_CREATORS.map((c) => <TrustAvatar key={c.id} c={c} />)}
        </div>
        <span>Trusted by creators with <b style={{ color: "var(--ink)" }}>15M+</b> combined subscribers</span>
      </Reveal>
    </div>
  );
}

function DashboardMock() {
  const bars = [38, 52, 44, 66, 58, 78, 70, 92, 84, 100];
  return (
    <Reveal className="mock-wrap" delay={160}>
      <div className="mock">
        <div className="mock-bar">
          <i></i><i></i><i></i>
          <span className="mb-title">Encore · Channel Dashboard</span>
          <span className="mb-live">Live</span>
        </div>
        <div className="mock-body">
          <div className="chartcard">
            <div className="ct"><span>Monthly revenue</span><span style={{ color: "var(--blue)" }}>2026</span></div>
            <div className="bars">
              {bars.map((h, i) => (
                <i key={i} style={{ height: h + "%", animationDelay: i * 60 + "ms" }}></i>
              ))}
            </div>
          </div>
          <div className="mock-kpis">
            <div className="kpi">
              <div className="kl"><Icon name="play" style={{ width: 14, height: 14 }} />Total views</div>
              <div className="kv tnum">30M+</div>
              <div className="kd up">Generated on YouTube</div>
            </div>
            <div className="kpi">
              <div className="kl"><Icon name="trend" style={{ width: 14, height: 14 }} />Revenue</div>
              <div className="kv tnum">$50K+</div>
              <div className="kd up">Growing daily</div>
            </div>
          </div>
        </div>
      </div>
      <div className="float-chip float-chip--tl">
        <div className="ic"><Icon name="users" style={{ width: 17, height: 17 }} /></div>
        <div><div>+15M Subs</div><div className="fc-sub">Combined</div></div>
      </div>
      <div className="float-chip float-chip--br">
        <div className="ic"><Icon name="zap" style={{ width: 17, height: 17 }} /></div>
        <div><div>3 channels</div><div className="fc-sub">fully managed</div></div>
      </div>
    </Reveal>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <HeroBg />
      <div className="wrap hero-dash">
        <HeroCopy />
        <DashboardMock />
      </div>
    </section>
  );
}
