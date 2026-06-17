"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Button from "./Button";
import Icon from "./Icon";
import { EMAIL } from "@/lib/data";

type Form = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Form, boolean>>;

export default function Contact() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: false });
  };

  const validate = () => {
    const er: Errors = {};
    if (!form.name.trim()) er.name = true;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) er.email = true;
    if (form.message.trim().length < 8) er.message = true;
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setSent(true);
  };

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-side">
          <span className="eyebrow">Contact</span>
          <h2 className="h-sect" style={{ marginTop: 16 }}>Get in touch</h2>
          <p className="lede" style={{ marginTop: 18 }}>
            Have content sitting in your library? Let&apos;s talk about turning it into a managed
            compilation channel. We usually reply within one business day.
          </p>
          <a className="infocard" href={`mailto:${EMAIL}`}>
            <div className="ic"><Icon name="mail" style={{ width: 22, height: 22 }} /></div>
            <div><div className="il">Email us</div><div className="iv">{EMAIL}</div></div>
          </a>
          <a className="infocard" href="#book">
            <div className="ic"><Icon name="cal" style={{ width: 22, height: 22 }} /></div>
            <div><div className="il">Prefer to talk?</div><div className="iv">Book a free strategy call</div></div>
          </a>
        </Reveal>

        <Reveal delay={80}>
          {sent ? (
            <div className="form">
              <div className="form-ok">
                <div className="ok-ic"><Icon name="check" style={{ width: 30, height: 30 }} /></div>
                <h3>Message sent</h3>
                <p>Thanks, {form.name.split(" ")[0] || "there"} — we&apos;ll be in touch at {form.email} shortly.</p>
                <div style={{ marginTop: 22 }}>
                  <Button variant="ghost" onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}>Send another</Button>
                </div>
              </div>
            </div>
          ) : (
            <form className="form" onSubmit={submit} noValidate>
              <div className={`field ${errors.name ? "err" : ""}`}>
                <label htmlFor="cf-name">Name</label>
                <input id="cf-name" type="text" placeholder="Your name" value={form.name} onChange={set("name")} />
                <div className="msg">Please enter your name.</div>
              </div>
              <div className={`field ${errors.email ? "err" : ""}`}>
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" type="email" placeholder="you@example.com" value={form.email} onChange={set("email")} />
                <div className="msg">Please enter a valid email address.</div>
              </div>
              <div className={`field ${errors.message ? "err" : ""}`}>
                <label htmlFor="cf-msg">Message</label>
                <textarea id="cf-msg" placeholder="Tell us about your content and channels…" value={form.message} onChange={set("message")}></textarea>
                <div className="msg">Please add a short message (at least 8 characters).</div>
              </div>
              <Button variant="primary" size="lg" className="btn--block" iconRight="arrow" type="submit">Send message</Button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
