"use client";

import { KatanaDivider, SectionLabel } from "./Logo";
import { IconYouTube, IconExternal } from "./icons";

const VIDEOS = [
  { id: "dQw4w9WgXcQ", title: "DORIMIN DRILL", label: "Clip officiel" },
  { id: "dQw4w9WgXcQ", title: "Djandjou 2K6", label: "Clip officiel" },
];

export const Videos = () => (
  <section id="videos" className="relative overflow-hidden bg-[#080808] px-6 py-20 md:py-24">
    <span className="kanji-bg" style={{ top: "10%", right: "2%", opacity: 0.05 }}>
      映
    </span>

    <div className="mx-auto max-w-[1000px]">
      <SectionLabel>Clips</SectionLabel>
      <h2 className="font-display text-gold-gradient mb-12 text-[clamp(32px,6vw,64px)] font-extrabold">
        Les Vidéos
      </h2>

      <div className="grid gap-6 sm:grid-cols-2">
        {VIDEOS.map((v, i) => (
          <div key={i} className="video-frame group relative">
            <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-[rgba(139,0,0,0.3)]" />
            <iframe
              width="100%"
              height="250"
              src={`https://www.youtube.com/embed/${v.id}?modestbranding=1&rel=0&color=red`}
              title={v.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="block"
            />
            <div className="flex items-center justify-between border-t border-[#C9A84C]/15 bg-[#0A0505]/90 px-4 py-3.5">
              <div>
                <div className="font-street text-[0.9rem] font-bold tracking-wider text-[#F0EDE8]">
                  {v.title}
                </div>
                <div className="font-street text-[0.7rem] uppercase tracking-widest text-[#8B0000]">
                  {v.label}
                </div>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-[#C9A84C] transition-colors hover:text-[#E8D080]"
              >
                <IconExternal />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://www.youtube.com/@daicochup"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex cursor-pointer items-center gap-2"
        >
          <IconYouTube /> Voir toute la chaîne
        </a>
      </div>
    </div>

    <KatanaDivider />
  </section>
);
