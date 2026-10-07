"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/content";
import { Logo } from "./logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1));
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      // Active section: the last one whose top has passed 35% of the viewport.
      // At the very bottom of the page, the last section wins.
      const line = window.innerHeight * 0.35;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(atBottom ? ids[ids.length - 1] : current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
      <div
        className={`glass mx-auto max-w-5xl transition-[border-radius,background-color] duration-300 ${
          open ? "rounded-3xl" : "rounded-full"
        } ${solid ? "glass-strong" : ""}`}
      >
        <nav aria-label="Main" className="flex h-14 items-center justify-between pl-5 pr-3 sm:pr-5">
          <a href="#top" aria-label="Usaha AI, back to top" className="rounded-md">
            <Logo />
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={active === item.href.slice(1) ? "location" : undefined}
                  className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-white/[0.06] hover:text-fg aria-[current]:bg-white/[0.1] aria-[current]:text-fg aria-[current]:shadow-[inset_0_1px_0_rgb(255_255_255/0.18)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="rounded-full p-2 text-muted hover:bg-white/[0.06] hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          </button>
        </nav>

        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-line px-5 pb-4 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.href.slice(1) ? "location" : undefined}
                  className="flex items-center gap-3 rounded-md py-3 text-base text-muted hover:text-fg aria-[current]:text-fg"
                >
                  <span
                    aria-hidden
                    className={`size-1.5 rounded-full ${
                      active === item.href.slice(1) ? "bg-accent" : "bg-transparent"
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
