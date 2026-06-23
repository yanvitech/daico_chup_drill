"use client";

import { KatanaDivider, SectionLabel } from "./Logo";

const STATS = [
  { num: "1K+", label: "Vues YouTube" },
  { num: "186", label: "Plays Audiomack" },
  { num: "∞", label: "Potentiel" },
];

export const Bio = () => (
  <section
    id="bio"
    className="relative overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #080808 0%, #0d0202 50%, #080808 100%)",
    }}
  >
    <div className="px-6 py-20 md:py-24">
      <div
        className="font-display pointer-events-none absolute left-1/2 top-1/2 select-none whitespace-nowrap text-[clamp(100px,20vw,260px)] font-extrabold leading-none tracking-wider"
        style={{
          color: "transparent",
          WebkitTextStroke: "1px rgba(139,0,0,0.12)",
          transform: "translate(-50%, -50%)",
        }}
      >
        MIRI
      </div>

      <div className="relative z-10 mx-auto max-w-[800px]">
        <SectionLabel>L&apos;artiste</SectionLabel>
        <h2 className="font-display text-gold-gradient mb-12 text-[clamp(32px,6vw,64px)] font-extrabold">
          Qui est Daïco Chup?
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 text-[0.95rem] leading-relaxed text-[#F0EDE8]/80">
              <span className="font-display text-[1.2em] font-bold text-[#C9A84C]">D</span>
              aïco Chup forge sa propre voie dans le paysage musical africain. Né du Bénin, il
              fusionne l&apos;énergie brute de la{" "}
              <span className="text-[#C9A84C]">drill</span> avec les rythmiques africaines pour
              créer un son qu&apos;on appelle{" "}
              <span className="text-[#C9A84C]">afrodrill</span> — tranchant, cinématique, sans
              compromis.
            </p>
            <p className="text-[0.9rem] leading-relaxed text-[#F0EDE8]/60">
              Son univers tourne autour de <strong className="text-[#8B0000]">MIRI</strong>, le nom
              de son katana. La lame comme métaphore du son : propre, précis, définitif. Chaque
              track est un coup porté. Chaque beat, une cicatrice.
            </p>
          </div>

          <div>
            <p className="mb-6 text-[0.9rem] leading-relaxed text-[#F0EDE8]/60">
              Influencé par la discipline et l&apos;esthétique du Japon féodal autant que par les
              rues de Cotonou, Daïco construit une identité visuelle et sonore qui
              n&apos;appartient qu&apos;à lui.
            </p>

            <div className="flex flex-wrap gap-6">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-gold-gradient text-3xl font-extrabold">
                    {s.num}
                  </div>
                  <div className="font-street text-[0.65rem] uppercase tracking-widest text-[#F0EDE8]/40">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    <KatanaDivider />
  </section>
);
