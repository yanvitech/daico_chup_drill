"use client";

import { KatanaDivider, SectionLabel } from "./Logo";
import { IconInstagram, IconTikTok, IconYouTube, IconMusic, IconExternal } from "./icons";

const SOCIAL_LINKS = [
  {
    icon: <IconInstagram />,
    label: "Instagram",
    handle: "@daico_chup",
    url: "https://www.instagram.com/daico_chup",
    color: "#E1306C",
  },
  {
    icon: <IconTikTok />,
    label: "TikTok",
    handle: "@daico_chup",
    url: "https://www.tiktok.com/@daico_chup",
    color: "#69C9D0",
  },
  {
    icon: <IconYouTube />,
    label: "YouTube",
    handle: "Daïco Chup",
    url: "https://www.youtube.com/@daicochup",
    color: "#FF0000",
  },
  {
    icon: <IconMusic />,
    label: "Audiomack",
    handle: "daico-chup",
    url: "https://audiomack.com/daico-chup",
    color: "#FF7700",
  },
];

export const Reseaux = () => (
  <section id="reseaux" className="relative bg-[#080808] px-6 py-20">
    <div className="mx-auto max-w-[600px] text-center">
      <SectionLabel>Suivre</SectionLabel>
      <h2 className="font-display text-gold-gradient mb-3 text-[clamp(28px,5vw,52px)] font-extrabold">
        Rejoins l&apos;univers
      </h2>
      <p className="font-street mb-12 tracking-wider text-[#F0EDE8]/40">
        Suis MIRI sur toutes les plateformes
      </p>

      <div className="flex flex-col gap-3">
        {SOCIAL_LINKS.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <span style={{ color: link.color }}>{link.icon}</span>
              <span className="font-street text-[0.9rem] tracking-wider">{link.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[0.8rem] text-[#F0EDE8]/30">{link.handle}</span>
              <IconExternal />
            </div>
          </a>
        ))}
      </div>
    </div>

    <KatanaDivider />
  </section>
);
