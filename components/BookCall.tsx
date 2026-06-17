import Reveal from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";
import { CALENDLY } from "@/lib/data";

export default function BookCall() {
  return (
    <section className="section" id="book">
      <div className="wrap">
        <Reveal className="book-card">
          <div className="bk-glow" aria-hidden="true"></div>
          <div>
            <span className="eyebrow center" style={{ color: "rgba(255,255,255,0.9)" }}>Free 30-min strategy call</span>
            <h2 style={{ marginTop: 14 }}>Book a free strategy call</h2>
            <p>See exactly how Encore Videos would turn your content into a managed compilation channel — no commitment, no pressure.</p>
            <div className="book-cta" style={{ marginTop: 28 }}>
              <Button variant="light" size="lg" href={CALENDLY} target="_blank" icon="cal">Schedule a Call</Button>
            </div>
          </div>
          <div className="book-meta">
            <div className="bm"><span className="ic"><Icon name="clock" style={{ width: 19, height: 19 }} /></span>30 minutes, on your schedule</div>
            <div className="bm"><span className="ic"><Icon name="zap" style={{ width: 19, height: 19 }} /></span>A tailored channel game plan</div>
            <div className="bm"><span className="ic"><Icon name="shield" style={{ width: 19, height: 19 }} /></span>No commitment required</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
