import Reveal from "./Reveal";
import Icon from "./Icon";
import { STEPS } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <Reveal className="sect-head center">
          <span className="eyebrow center">How it works</span>
          <h2 className="h-sect">Three steps. Zero extra work.</h2>
          <p className="lede">From partnership to payout, we handle everything. You keep creating and we turn your back catalog into a new revenue stream.</p>
        </Reveal>
        <div className="steps" style={{ marginTop: 56 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.n} className="step" delay={i * 90}>
              <span className="ghost" aria-hidden="true">{s.n}</span>
              <span className="num">STEP {s.n}</span>
              <div className="ic"><Icon name={s.icon} /></div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {i < STEPS.length - 1 && (
                <span className="step-connect" aria-hidden="true">
                  <Icon name="arrow" style={{ width: 22, height: 22 }} />
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
