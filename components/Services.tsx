import Image from "next/image";
import Reveal from "./Reveal";

const services = [
  {
    emoji: "🍔",
    title: "Livraison de repas",
    image: "/images/food.jpeg",
    text: "Découvrez les meilleurs restaurants et fast-foods de Djibouti. Parcourez les menus, commandez en quelques taps et suivez votre livreur en temps réel.",
    points: [
      "Restaurants & fast-foods locaux",
      "Suivi : préparation → départ → livraison",
      "Position du livreur en direct sur la carte",
    ],
  },
  {
    emoji: "🚕",
    title: "Courses VTC",
    image: "/images/vtc-ride.jpeg",
    text: "Indiquez votre destination et obtenez un prix clair, sans surprise. Choisissez votre véhicule et suivez l'approche de votre chauffeur sur la carte.",
    points: [
      "Prix annoncé à l'avance",
      "Véhicule Standard ou Confort",
      "Suivi du chauffeur en temps réel",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Nos services</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Tout Djibouti, dans une seule application
        </h2>
        <p className="mt-3 text-muted">
          Repas ou trajet, Velox réunit le meilleur de la ville avec une expérience fluide et
          rapide.
        </p>
      </Reveal>

      <div className="grid gap-7 md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal
            key={s.title}
            delay={i * 100}
            className="group overflow-hidden rounded-3xl border border-white/5 bg-charcoal transition duration-500 hover:-translate-y-1.5 hover:border-neon/20 hover:shadow-2xl"
          >
            <div className="relative h-60 overflow-hidden bg-black">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover object-top transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-charcoal" />
            </div>
            <div className="p-7">
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="mt-2 font-display text-2xl font-bold">{s.title}</h3>
              <p className="mt-3 text-muted">{s.text}</p>
              <ul className="mt-5 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-white">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-neon text-[10px] font-bold text-[#06210a]">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
