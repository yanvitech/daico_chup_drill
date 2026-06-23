import { DaicoLogo } from "./Logo";
import { IconInstagram, IconTikTok, IconYouTube, IconMusic } from "./icons";

const FOOTER_LINKS = [
  { href: "https://www.instagram.com/daico_chup", icon: <IconInstagram /> },
  { href: "https://www.tiktok.com/@daico_chup", icon: <IconTikTok /> },
  { href: "https://www.youtube.com/@daicochup", icon: <IconYouTube /> },
  { href: "https://audiomack.com/daico-chup", icon: <IconMusic /> },
];

export const Footer = () => (
  <footer className="border-t border-[#C9A84C]/10 bg-[#040404] px-6 py-10 text-center">
    <div className="mb-5">
      <DaicoLogo size={48} />
    </div>
    <div className="font-display text-gold-gradient mb-2 text-[1.2rem] font-extrabold">
      DAÏCO CHUP
    </div>
    <div className="font-street mb-6 text-[0.7rem] uppercase tracking-widest text-[#F0EDE8]/30">
      MIRI · Afrodrill · Bénin
    </div>
    <div className="mb-6 flex justify-center gap-5">
      {FOOTER_LINKS.map((l, i) => (
        <a
          key={i}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer text-[#F0EDE8]/40 transition-colors duration-200 hover:text-[#C9A84C]"
        >
          {l.icon}
        </a>
      ))}
    </div>
    <p className="text-[0.7rem] text-[#F0EDE8]/20">
      © {new Date().getFullYear()} Daïco Chup. Tous droits réservés. MIRI ne dort jamais.
    </p>
  </footer>
);
