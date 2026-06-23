"use client";

import { useState } from "react";
import { IconMail } from "./icons";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, _subject: "Nouvelle inscription newsletter Daïco Chup" }),
      });
      if (res.ok) {
        setStatus("done");
      } else {
        setStatus("error");
        setErrorMsg("Erreur d'envoi — réessaie plus tard.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Erreur réseau — vérifie ta connexion.");
    }
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #080808 0%, #0d0202 60%, #080808 100%)",
      }}
    >
      <div className="px-6 py-20">
        <span
          className="kanji-bg"
          style={{ bottom: "-5%", left: "50%", transform: "translateX(-50%)", opacity: 0.04 }}
        >
          通
        </span>

        <div className="relative z-10 mx-auto max-w-[560px] text-center">
          <div className="mb-2 flex items-center justify-center gap-2 font-street text-xs uppercase tracking-widest text-[#8B0000]">
            <span className="text-[#C9A84C]">◆</span>
            Rester connecté
            <span className="text-[#C9A84C]">◆</span>
          </div>

          <h2 className="font-display mb-3 text-[clamp(28px,5vw,48px)] font-extrabold text-[#F0EDE8]">
            Entre dans le clan <span className="text-gold-gradient">MIRI</span>
          </h2>

          <p className="mb-10 text-[0.9rem] leading-relaxed text-[#F0EDE8]/50">
            Nouveaux sons, dates de concerts, contenus exclusifs. Reçois l&apos;intel directement.
          </p>

          {status === "done" ? (
            <div className="border border-[#C9A84C]/40 bg-[#C9A84C]/5 p-6">
              <div className="font-display text-gold-gradient mb-2 text-[1.5rem] font-extrabold">
                Bienvenue dans le clan ◆
              </div>
              <p className="text-[0.85rem] text-[#F0EDE8]/60">
                MIRI te garde informé. Reste à l&apos;écoute.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ton@email.com"
                  required
                  className="input-field flex-1 border-r-0"
                />
                <button
                  type="submit"
                  className="btn-primary flex-shrink-0 cursor-pointer"
                  style={{ clipPath: "none", borderLeft: "none", padding: "14px 24px" }}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    "..."
                  ) : (
                    <>
                      <IconMail /> S&apos;inscrire
                    </>
                  )}
                </button>
              </div>
              {status === "error" && (
                <p className="text-left text-[0.8rem] text-[#8B0000]">
                  {errorMsg || "Erreur — réessaie ou écris directement à daicochup@gmail.com"}
                </p>
              )}
              <p className="text-[0.7rem] text-[#F0EDE8]/25">
                Pas de spam. Désinscription en 1 clic. Ton email reste entre nous.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
