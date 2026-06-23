"use client";

import { KatanaDivider, SectionLabel } from "./Logo";
import { IconPlay, IconMusic, IconSpotify, IconExternal } from "./icons";

const TRACKS = [
  { title: "DORIMIN DRILL", desc: "Le cut qui a tout lancé" },
  { title: "Djandjou 2K6", desc: "Afrodrill pur — rythme et lame" },
];

export const Musique = () => (
  <section
    id="musique"
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #080808 0%, #100505 40%, #080808 100%)",
    }}
  >
    <div className="px-6 py-24">
      <span className="kanji-bg" style={{ top: "20%", left: "2%", opacity: 0.05 }}>
        音
      </span>

      <div className="mx-auto max-w-[900px]">
        <SectionLabel>Streaming</SectionLabel>
        <h2 className="font-display text-gold-gradient mb-2 text-[clamp(32px,6vw,64px)] font-extrabold">
          La Musique
        </h2>
        <p className="font-street mb-12 tracking-wider text-[#F0EDE8]/50">
          Stream. Écoute. Ressens l&apos;univers MIRI.
        </p>

        <div className="mb-6 border border-[#C9A84C]/20 bg-black/2 p-1">
          <iframe
            title="Daïco Chup sur Audiomack"
            src="https://audiomack.com/embed/daico-chup/song/dorimin-drill?background=1&theme=dark"
            width="100%"
            height="252"
            frameBorder="0"
            allow="encrypted-media"
            className="block bg-[#080808]"
          />
        </div>

        <div className="mb-12 flex flex-wrap gap-3">
          {[
            { icon: <IconMusic />, label: "Audiomack", url: "https://audiomack.com/daico-chup" },
            { icon: <IconSpotify />, label: "Spotify", url: "https://open.spotify.com" },
            {
              icon: <span className="text-[0.7rem] font-extrabold">Q</span>,
              label: "Qobuz",
              url: "https://www.qobuz.com",
            },
          ].map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-badge cursor-pointer"
            >
              {link.icon} {link.label}
              <IconExternal />
            </a>
          ))}
        </div>

        <div className="border-t border-[#C9A84C]/15 pt-8">
          <p className="font-street mb-4 text-[0.75rem] uppercase tracking-widest text-[#F0EDE8]/40">
            Tracks en vedette
          </p>
          {TRACKS.map((track, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-white/5 py-3.5"
            >
              <div className="flex items-center gap-4">
                <span className="font-street min-w-[20px] text-[0.75rem] text-[#8B0000]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="font-street text-[0.95rem] font-bold tracking-wider text-[#F0EDE8]">
                    {track.title}
                  </div>
                  <div className="mt-0.5 text-[0.75rem] text-[#F0EDE8]/40">{track.desc}</div>
                </div>
              </div>
              <a
                href="https://audiomack.com/daico-chup"
                target="_blank"
                rel="noopener noreferrer"
                className="flex cursor-pointer items-center gap-1.5 text-[0.75rem] text-[#C9A84C] no-underline transition-colors hover:text-[#E8D080]"
              >
                <IconPlay /> Écouter
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>

    <KatanaDivider />
  </section>
);
