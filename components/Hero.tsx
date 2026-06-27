"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } },
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
};

const badges = [
  { label: "🍔 Livraison", className: "top-12 -left-4 sm:-left-8" },
  { label: "🚕 VTC", className: "bottom-28 -right-3 sm:-right-8" },
  { label: "⚡ Suivi en direct", className: "bottom-6 left-6 text-neon" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background fx */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-120px] h-[600px] w-[600px] rounded-full bg-neon/20 blur-[140px]" />
        <div className="absolute bottom-[-160px] left-[-140px] h-[520px] w-[520px] rounded-full bg-neon-deep/10 blur-[140px]" />
        <div className="grid-bg absolute inset-0 opacity-50" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-neon/20 bg-neon/[0.06] px-4 py-1.5 text-sm font-semibold text-neon-soft"
          >
            <span
              className="h-2 w-2 rounded-full bg-neon"
              style={{ boxShadow: "0 0 10px var(--color-neon)", animation: "pulse-dot 1.8s infinite" }}
            />
            Disponible à Djibouti-ville
          </motion.span>

          <motion.h1
            variants={item}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Djibouti à portée de main,
            <br />
            <span className="text-neon-gradient italic">en un éclair.</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-mist">
            Faites-vous livrer vos plats préférés et réservez une course VTC depuis une seule
            application. Simple. Rapide. Local.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 font-display text-lg italic font-medium text-neon-soft"
          >
            « Chaque seconde compte. »
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#telecharger"
              className="btn-neon inline-flex items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold tracking-wide"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M3 20.5V3.5c0-.6.3-1.1.8-1.4L13.5 12 3.8 21.9c-.5-.3-.8-.8-.8-1.4zM16.8 15.3l-2.4-2.4 2.4-2.4 2.9 1.7c.9.5.9 1.8 0 2.3l-2.9 1.7zM5.3 2.2l9.5 5.5-2.1 2.1L5.3 2.2zM12.7 14.2l2.1 2.1-9.5 5.5 7.4-7.6z" />
              </svg>
              Google Play
            </a>
            <a
              href="#services"
              className="btn-ghost rounded-full px-7 py-4 text-sm font-bold tracking-wide"
            >
              Découvrir les services
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-12 flex flex-wrap gap-9">
            {[
              ["5", "langues"],
              ["4.8★", "satisfaction"],
              ["~secondes", "pour commander"],
            ].map(([n, l]) => (
              <div key={l} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-white">{n}</span>
                <span className="text-xs uppercase tracking-wider text-faint">{l}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Phones */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.3 }}
          className="relative mx-auto flex min-h-[520px] w-full max-w-md items-center justify-center"
        >
          <div className="phone-frame animate-float-slow relative z-20 w-[260px]">
            <Image
              src="/images/welcome.jpeg"
              alt="Écran d'accueil de l'application Velox"
              width={520}
              height={1100}
              priority
              className="w-full"
            />
          </div>
          <div
            className="phone-frame absolute right-2 top-16 z-10 w-[230px] opacity-90"
            style={{ transform: "rotate(7deg) translateX(34px)" }}
          >
            <Image
              src="/images/home.jpeg"
              alt="Tableau de bord des services Velox"
              width={460}
              height={970}
              className="w-full"
            />
          </div>

          {badges.map((b) => (
            <span
              key={b.label}
              className={`glass animate-float-slow absolute z-30 rounded-2xl border border-neon/20 px-4 py-2.5 text-sm font-semibold ${b.className}`}
            >
              {b.label}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
