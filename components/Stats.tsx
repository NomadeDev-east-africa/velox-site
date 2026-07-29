"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "services en 1 app" },
  { value: 5, suffix: "", label: "langues prises en charge" },
  { value: 7, suffix: "", label: "moyens de paiement" },
  { value: 100, suffix: "%", label: "pensé pour Djibouti" },
];

/* useLayoutEffect côté client, useEffect côté serveur (évite le warning SSR).
   Indispensable ici : la remise à zéro doit avoir lieu AVANT la peinture,
   sinon on voit la valeur finale clignoter puis retomber à 0. */
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  /* La valeur finale est l'état INITIAL : elle est donc écrite en dur dans le HTML rendu
     par le serveur. Sans JS (bot, crawler, erreur de script), le visiteur voit le vrai
     chiffre — jamais 0. L'animation n'est qu'un enrichissement progressif. */
  const [n, setN] = useState(value);

  useIsoLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") return;

    setN(0);

    let raf = 0;
    let done = false;
    const finish = () => {
      done = true;
      cancelAnimationFrame(raf);
      setN(value);
    };

    const run = () => {
      if (done) return;
      done = true;
      const start = performance.now();
      const duration = 900;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        // easeOutCubic
        setN(Math.round(value * (1 - Math.pow(1 - t, 3))));
        if (t < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        run();
      },
      // Seuil bas : une grille de 4 colonnes peut ne jamais atteindre 60 % de
      // visibilité sur un écran court. rootMargin déclenche juste avant l'entrée.
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(node);

    /* Filet de sécurité : si l'observer ne se déclenche jamais (section hors flux,
       navigateur exotique), on affiche la vraie valeur au bout de 2,5 s. */
    const safety = window.setTimeout(() => {
      obs.disconnect();
      if (!done) finish();
    }, 2500);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
      window.clearTimeout(safety);
    };
  }, [value]);

  return (
    <span
      ref={ref}
      className="font-display text-4xl font-bold text-neon sm:text-5xl"
      style={{ textShadow: "0 0 30px rgba(155,255,58,.35)" }}
    >
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-white/5 bg-white/[0.012]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 sm:px-8 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <Counter value={s.value} suffix={s.suffix} />
            <p className="mt-1 text-sm text-muted">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
