"use client";

import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-hairline bg-bg/60 py-3 backdrop-blur-[12px]"
          : "border-b border-transparent bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-6 md:px-12">
        <a
          href="#top"
          className="font-mono text-eyebrow uppercase tracking-eyebrow text-fg-primary"
          aria-label="Back to top"
        >
          Cristian Reyes
        </a>
        <nav
          className="flex items-center gap-6 font-mono text-eyebrow uppercase tracking-eyebrow text-fg-secondary md:gap-10"
          aria-label="Primary"
        >
          <a href="#work" className="transition-colors hover:text-fg-primary">
            Work
          </a>
          <a href="#about" className="transition-colors hover:text-fg-primary">
            About
          </a>
          <a href="#contact" className="transition-colors hover:text-fg-primary">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
