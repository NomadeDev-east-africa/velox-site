"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2, suffix: "", label: "services en 1 app" },
  { value: 5, suffix: "", label: "langues prises en charge" },
  { value: 4, suffix: "", label: "moyens de paiement" },
  { value: 100, suffix: "%", label: "pensé pour Djibouti" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const step = Math.max(1, Math.round(value / 40));
        let cur = 0;
        const tick = () => {
          cur = Math.min(value, cur + step);
          setN(cur);
          if (cur < value) requestAnimationFrame(tick);
        };
        tick();
      },
      { threshold: 0.6 }
    );
    obs.observe(node);
    return () => obs.disconnect();
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
