"use client";

import { useState, useEffect } from "react";
import { DaicoLogo } from "./Logo";
import { IconPlay } from "./icons";
import { SectionLabel } from "./Logo";

const KANJI_BG = [
  { char: "斬", style: { top: "10%", left: "-2%", "--rot": "-5deg" } as React.CSSProperties },
  { char: "刃", style: { bottom: "5%", right: "-1%", "--rot": "8deg", animationDelay: "2s", fontSize: "clamp(60px,10vw,130px)" } as React.CSSProperties },
  { char: "魂", style: { top: "40%", right: "5%", "--rot": "-3deg", animationDelay: "4s", fontSize: "clamp(40px,7vw,90px)" } as React.CSSProperties },
];

export const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="scanlines relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(139,0,0,0.12) 0%, transparent 60%), #080808",
      }}
    >
      {KANJI_BG.map((k, i) => (
        <span
          key={i}
          className="kanji-bg animate-float"
          style={k.style}
        >
          {k.char}
        </span>
      ))}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className={`absolute left-[-50%] top-[65%] h-px w-[200%] origin-center transition-opacity duration-1500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.4) 40%, rgba(232,208,128,0.8) 50%, rgba(201,168,76,0.4) 60%, transparent 100%)",
            transform: "rotate(-12deg)",
            transitionDelay: "0.8s",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[900px] px-6 pb-16 pt-32 text-center">
        <div
          className={`mb-8 flex justify-center transition-all duration-800 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
          }`}
        >
          <DaicoLogo size={100} />
        </div>

        <div
          className={`transition-all duration-800 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <SectionLabel>Afrodrill · Drill Bénin · MIRI</SectionLabel>
        </div>

        <h1
          className={`font-display text-gold-gradient animate-flicker text-[clamp(52px,12vw,130px)] font-extrabold leading-[0.9] tracking-tight transition-all duration-900 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          DAÏCO
          <br />
          <span className="text-[#F0EDE8]" style={{ WebkitTextStroke: "1px rgba(201,168,76,0.3)" }}>
            CHUP
          </span>
        </h1>

        <p
          className={`font-street mb-2 text-[clamp(14px,2.5vw,22px)] uppercase tracking-[0.3em] text-[#8B0000] transition-all duration-900 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          ── MIRI coupe tout ──
        </p>

        <p
          className={`font-street mb-12 text-[clamp(12px,2vw,16px)] tracking-wider text-[#F0EDE8]/50 transition-all duration-900 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          Le son qui tranche. La lame qui groove.
        </p>

        <div
          className={`flex flex-wrap justify-center gap-4 transition-all duration-900 ease-out ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          <a href="#musique" className="btn-primary cursor-pointer">
            <IconPlay /> Écouter maintenant
          </a>
          <a href="#videos" className="btn-secondary cursor-pointer">
            Voir les clips
          </a>
        </div>

        <div
          className={`mt-20 flex flex-col items-center gap-2 transition-opacity duration-1000 ${
            loaded ? "opacity-50" : "opacity-0"
          }`}
          style={{ color: "#C9A84C" }}
        >
          <span className="font-street text-[0.65rem] uppercase tracking-widest">Scroll</span>
          <div className="h-10 w-px animate-[blood-drip_2s_ease-in-out_infinite] bg-gradient-to-b from-[#C9A84C] to-transparent" />
        </div>
      </div>
    </section>
  );
};
