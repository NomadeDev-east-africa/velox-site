import Reveal from "./Reveal";

const features = [
  { icon: "📍", title: "Suivi en temps réel", text: "Visualisez la position de votre livreur ou de votre chauffeur, en direct sur la carte." },
  { icon: "💳", title: "Paiement flexible", text: "Espèces, Waafi, D-Money, CAC Pay. Payez comme vous voulez, en toute simplicité." },
  { icon: "⭐", title: "Fidélité", text: "Gagnez des points à chaque commande et utilisez-les pour réduire vos frais." },
  { icon: "🌍", title: "Multilingue", text: "Français, anglais, arabe, somali et afar — Velox parle votre langue." },
  { icon: "⚡", title: "Rapide & simple", text: "Commandez ou réservez en quelques secondes, sans complication." },
  { icon: "🔒", title: "Sécurisé", text: "Vos données sont protégées et chiffrées via une infrastructure Google Firebase." },
];

export default function Features() {
  return (
    <section id="fonctions" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Fonctionnalités</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Pensée pour aller vite
        </h2>
        <p className="mt-3 text-muted">
          Une application complète qui s'adapte à votre quotidien à Djibouti.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <Reveal
            key={f.title}
            delay={(i % 3) * 80}
            className="rounded-3xl border border-white/5 bg-charcoal p-7 transition duration-400 hover:-translate-y-1.5 hover:border-neon/20 hover:bg-graphite"
          >
            <div className="grid h-14 w-14 place-items-center rounded-2xl border border-neon/15 bg-neon/[0.07] text-2xl">
              {f.icon}
            </div>
            <h3 className="mt-5 font-display text-xl font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
