import Reveal from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";
import Logo from "./Logo";

const points = [
  "Managed compilation channels built around your existing content",
  "A brand-new revenue stream with no extra filming or editing for you",
  "Strategy, publishing, and optimization handled entirely by our team",
];

export default function About() {
  return (
    <section className="section section--soft" id="about">
      <div className="wrap about-grid">
        <Reveal className="about-card" delay={60}>
          <Logo size={96} />
          <h3 style={{ fontSize: 26, marginTop: 20 }}>More reach from content you already own.</h3>
          <ul className="about-points">
            {points.map((p) => (
              <li key={p}><span className="ck"><Icon name="check" /></span>{p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <span className="eyebrow">About Encore Videos</span>
          <h2 className="h-sect" style={{ marginTop: 16 }}>Your content, working twice as hard.</h2>
          <p className="lede" style={{ marginTop: 20 }}>
            Encore Videos specializes in managing compilation channels for creators, helping them
            unlock additional revenue without additional work on their end.
          </p>
          <p className="muted" style={{ marginTop: 16, fontSize: 16 }}>
            We work directly with creators to repurpose their content into successful, fully managed
            compilation channels. You keep doing what you do best. We build the encore.
          </p>
          <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
            <Button variant="primary" href="#book" icon="phone">Book a Call</Button>
            <Button variant="ghost" href="#channels">See our channels</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
