"use client";

import Reveal from "./Reveal";
import Icon from "./Icon";
import { useCountUp } from "./useCountUp";
import { REV_STATS } from "@/lib/data";

export default function Revenue() {
  const [ref, text] = useCountUp(100000, { duration: 2200, prefix: "$" });
  const bars = [30, 42, 38, 54, 48, 62, 70, 64, 82, 76, 92, 100, 88, 96];
  return (
    <section className="section revenue" id="revenue">
      <div className="rev-glow" aria-hidden="true"></div>
      <div className="rev-bars" aria-hidden="true">
        {bars.map((h, i) => <i key={i} style={{ height: h + "%" }}></i>)}
      </div>
      <div className="wrap">
        <div className="rev-inner">
          <Reveal className="eyebrow center">Revenue generated for clients in 2026</Reveal>
          <Reveal delay={80}>
            <div className="rev-number tnum" ref={ref}>
              {text}<span style={{ WebkitTextFillColor: "var(--blue)" }}>+</span>
            </div>
          </Reveal>
          <Reveal as="p" className="rev-sub" delay={140}>
            Real revenue generated for our clients.
          </Reveal>
          <Reveal className="rev-grow" delay={200}>
            <Icon name="trend" style={{ width: 18, height: 18 }} />And growing every day.
          </Reveal>
          <Reveal className="rev-stats" delay={260}>
            {REV_STATS.map((s) => (
              <div className="rev-stat" key={s.l}>
                <div className="rs-v tnum">{s.v}</div>
                <div className="rs-l">{s.l}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
