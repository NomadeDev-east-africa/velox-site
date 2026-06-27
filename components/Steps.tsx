import Reveal from "./Reveal";

const steps = [
  { n: "01", title: "Téléchargez Velox", text: "Installez l'application gratuitement et créez votre compte en quelques secondes." },
  { n: "02", title: "Choisissez", text: "Un repas dans vos restaurants préférés ou une course VTC vers votre destination." },
  { n: "03", title: "Suivez en direct", text: "Payez comme vous voulez et suivez votre commande ou votre chauffeur sur la carte." },
];

const payments = ["💵 Espèces", "📲 Waafi", "💳 D-Money", "🏦 CAC Pay"];

export default function Steps() {
  return (
    <section id="etapes" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <span className="eyebrow">Comment ça marche</span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Trois étapes, c'est tout
        </h2>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 100}
            className="relative overflow-hidden rounded-3xl border border-white/5 bg-charcoal p-8"
          >
            <span className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-neon to-transparent" />
            <span
              className="font-display text-5xl font-bold text-transparent"
              style={{ WebkitTextStroke: "1.5px var(--color-neon)" }}
            >
              {s.n}
            </span>
            <h3 className="mt-3 font-display text-xl font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-muted">{s.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12 rounded-3xl border border-neon/15 bg-charcoal px-6 py-10 text-center">
        <h3 className="font-display text-2xl font-bold sm:text-3xl">Payez comme vous voulez</h3>
        <div className="mt-7 flex flex-wrap justify-center gap-3.5">
          {payments.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/5 bg-white/[0.04] px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:border-neon hover:text-neon"
            >
              {p}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
