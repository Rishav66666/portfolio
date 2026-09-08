"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, personal } from "@/data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-bg/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between h-16">
        <a
          href="#home"
          className="font-display text-lg tracking-tight text-text-primary hover:text-accent transition-colors"
        >
          {personal.shortName}<span className="text-accent">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="lg:hidden text-text-primary"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-bg/98 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
