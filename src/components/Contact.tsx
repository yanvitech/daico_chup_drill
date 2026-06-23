"use client";

import { useState } from "react";
import { IconInstagram } from "./icons";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: "Demande de booking Daïco Chup" }),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#080808] px-6 py-20 md:pb-32">
      <span className="kanji-bg" style={{ top: "20%", right: "-2%", opacity: 0.05 }}>
        契
      </span>

      <div className="mx-auto max-w-[660px]">
        <div className="mb-2 flex items-center gap-2 font-street text-xs uppercase tracking-widest text-[#8B0000]">
          <span className="text-[#C9A84C]">◆</span>
          Booking & Contact
          <span className="text-[#C9A84C]">◆</span>
        </div>

        <h2 className="font-display text-gold-gradient mb-3 text-[clamp(28px,5vw,56px)] font-extrabold">
          Travailler avec Daïco
        </h2>

        <p className="mb-12 text-[0.9rem] leading-relaxed text-[#F0EDE8]/50">
          Concerts, collaborations, features, interviews. MIRI est disponible pour ceux qui méritent
          la lame.
        </p>

        {status === "done" ? (
          <div className="border border-[#8B0000]/50 bg-[#8B0000]/5 p-8 text-center">
            <div className="font-display mb-3 text-[1.4rem] font-extrabold text-[#C9A84C]">
              Message reçu ◆
            </div>
            <p className="text-[0.85rem] text-[#F0EDE8]/60">
              On te répond dès que possible. MIRI est patient.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="font-street mb-2 block text-[0.7rem] uppercase tracking-widest text-[#F0EDE8]/40">
                  Nom / Promoteur
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Ton nom"
                  className="input-field"
                />
              </div>
              <div>
                <label className="font-street mb-2 block text-[0.7rem] uppercase tracking-widest text-[#F0EDE8]/40">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="contact@mail.com"
                  className="input-field"
                />
              </div>
            </div>

            <div>
              <label className="font-street mb-2 block text-[0.7rem] uppercase tracking-widest text-[#F0EDE8]/40">
                Objet & Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Concert, collab, feature... Décris ta demande."
                rows={5}
                className="input-field resize-y font-sans"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                className="btn-primary cursor-pointer"
                disabled={status === "sending"}
                style={{ opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Envoi..." : "Envoyer la demande"}
              </button>
              <span className="text-[0.75rem] text-[#F0EDE8]/25">ou</span>
              <a
                href="https://www.instagram.com/daico_chup"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary cursor-pointer"
                style={{ padding: "13px 20px" }}
              >
                <IconInstagram /> DM Instagram
              </a>
            </div>

            {status === "error" && (
              <p className="text-[0.8rem] text-[#8B0000]">
                Erreur d&apos;envoi — contacte directement sur Instagram.
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
};
