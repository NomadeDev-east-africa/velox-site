import Image from "next/image";

const cols = [
  {
    title: "Navigation",
    links: [
      { label: "Services", href: "#services" },
      { label: "Fonctions", href: "#fonctions" },
      { label: "Aperçu", href: "#apercu" },
      { label: "Télécharger", href: "#telecharger" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Haboneabdoulrazak@gmail.com", href: "mailto:Haboneabdoulrazak@gmail.com" },
      { label: "+33 7 58 90 14 00", href: "tel:+33758901400" },
      { label: "Djibouti-ville, Djibouti", href: "#" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Politique de confidentialité", href: "/confidentialite" },
      { label: "Conditions d'utilisation", href: "/confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 border-b border-white/5 pb-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <span
              className="relative block h-14 w-40"
              style={{ filter: "drop-shadow(0 0 14px rgba(155,255,58,.25))" }}
            >
              <Image src="/images/logo.png" alt="Velox" fill className="object-contain object-left" />
            </span>
            <p className="mt-4 text-sm text-muted">
              Service national djiboutien — Livraison &amp; VTC.
              <br />
              Chaque seconde compte.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{c.title}</h4>
              {c.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="mb-2.5 block text-sm text-muted transition hover:text-neon"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-6 text-sm text-faint">
          <p>© 2026 Velox — Édité par Nomade. Tous droits réservés.</p>
          <p>Application disponible en français, anglais, arabe, somali et afar.</p>
        </div>
      </div>
    </footer>
  );
}
