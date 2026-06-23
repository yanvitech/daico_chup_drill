"use client";

import { useState, useEffect } from "react";
import { DaicoLogo } from "./Logo";

const NAV_ITEMS = [
  { id: "musique", label: "Musique" },
  { id: "videos", label: "Vidéos" },
  { id: "bio", label: "Bio" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#C9A84C]/15 bg-[#040404]/95 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#hero" className="cursor-pointer">
          <DaicoLogo size={44} />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-street cursor-pointer text-xs uppercase tracking-widest text-[#F0EDE8]/70 transition-colors duration-200 hover:text-[#C9A84C]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary cursor-pointer text-[0.65rem]"
            style={{ padding: "8px 20px" }}
          >
            Booking
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#C9A84C] transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#C9A84C]/15 bg-[#040404]/98 px-6 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="font-street cursor-pointer text-sm uppercase tracking-widest text-[#F0EDE8]/70 transition-colors hover:text-[#C9A84C]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="btn-primary inline-flex cursor-pointer items-center justify-center text-xs"
            >
              Booking
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
