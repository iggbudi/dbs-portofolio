"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#infra", label: "Infrastructure" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ink-800 bg-ink-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" onClick={close} className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-amber-500/40 bg-amber-500/10 font-mono text-sm font-medium text-amber-400">
            D
          </span>
          <span className="hidden text-sm font-medium tracking-tight text-paper sm:inline">
            Dwi Budi Santoso
          </span>
        </a>

        {/* desktop nav */}
        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-mist transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* desktop CTA */}
          <a
            href={`mailto:${profile.email}`}
            className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-400 md:inline-block"
          >
            Get in touch
          </a>

          {/* mobile hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex flex-col gap-1.5 md:hidden"
          >
            <span
              className={`block h-px w-5 bg-paper transition-transform duration-200 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-paper transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-paper transition-transform duration-200 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* mobile menu panel */}
      {open && (
        <div className="border-b border-ink-800 bg-ink-950/95 backdrop-blur-md md:hidden">
          <ul className="mx-auto max-w-6xl space-y-0 px-5 pb-6 pt-2 sm:px-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  className="block py-3 text-sm text-mist transition-colors hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={`mailto:${profile.email}`}
                onClick={close}
                className="inline-block rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-amber-400"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
