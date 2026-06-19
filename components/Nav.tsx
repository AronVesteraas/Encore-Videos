"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import Button from "./Button";
import Icon from "./Icon";

const THEME_KEY = "encore-theme";

const links: [string, string][] = [
  ["Channels", "#channels"],
  ["Revenue", "#revenue"],
  ["Process", "#process"],
  ["About", "#about"],
  ["Contact", "#contact"],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Initialize from the DOM attribute that the no-flash inline script already set.
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {}
      return next;
    });
  };

  const close = () => setOpen(false);
  const isDark = theme === "dark";

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a className="brand" href="#top" aria-label="Encore Videos home">
            <Logo size={52} />
            <span>Encore<span className="x"> Videos</span></span>
          </a>
          <nav className="nav-links">
            {links.map(([l, h]) => (
              <a key={h} href={h}>{l}</a>
            ))}
          </nav>
          <div className="nav-right">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              role="switch"
              aria-checked={isDark}
              aria-label="Toggle dark mode"
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <span className="tt-icon tt-sun"><Icon name="sun" /></span>
              <span className="tt-icon tt-moon"><Icon name="moon" /></span>
            </button>
            <Button variant="primary" size="sm" className="btn--book" href="#book" icon="phone">Book a Call</Button>
            <button
              className={`nav-burger ${open ? "open" : ""}`}
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map(([l, h]) => (
          <a key={h} href={h} onClick={close}>{l}</a>
        ))}
        <Button variant="primary" href="#book" icon="phone" onClick={close}>Book a Call</Button>
      </div>
    </>
  );
}
