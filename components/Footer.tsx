import Logo from "./Logo";
import Icon from "./Icon";
import { CALENDLY, EMAIL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand-col">
            <a className="brand" href="#top"><Logo size={34} /><span>Encore<span className="x"> Videos</span></span></a>
            <p className="footer-blurb">Helping creators unlock additional revenue through professionally managed compilation channels.</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#channels">Channels</a>
            <a href="#revenue">Revenue</a>
            <a href="#process">How it works</a>
            <a href="#about">About</a>
          </div>
          <div className="footer-col">
            <h4>Get started</h4>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="#book">Book a call</a>
            <a href="#contact">Contact us</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Encore Videos. All rights reserved.</span>
          <div className="socials">
            <a href={`mailto:${EMAIL}`} aria-label="Email"><Icon name="mail" style={{ width: 18, height: 18 }} /></a>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" aria-label="Book a call"><Icon name="cal" style={{ width: 18, height: 18 }} /></a>
            <a href="#top" aria-label="Back to top"><Icon name="play" style={{ width: 18, height: 18 }} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
