import type { Metadata } from "next";
import Link from "next/link";
import Logo from "@/components/Logo";
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_HREF, MAILTO } from "@/lib/contact";
import { SectionBlock, type Section } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Velox",
  description:
    "Politique de confidentialité de l'application Velox : quelles données nous collectons, pourquoi, et quels sont vos droits.",
};

const sections: Section[] = [
  {
    n: "01",
    title: "Données que nous collectons",
    items: [
      ["Informations de compte :", "nom, adresse e-mail, numéro de téléphone, photo de profil."],
      ["Données de localisation :", "position GPS précise, utilisée pour la livraison de vos commandes et la réservation/suivi de vos courses VTC."],
      ["Données d'utilisation :", "historique de commandes et de courses, adresses de livraison, moyen de paiement sélectionné (le paiement lui-même n'est pas traité dans l'app)."],
      ["Identifiants techniques :", "jeton de notification (Firebase Cloud Messaging) pour vous envoyer le suivi de vos commandes."],
    ],
  },
  {
    n: "02",
    title: "Pourquoi nous les utilisons",
    items: [
      ["", "Créer et gérer votre compte et votre authentification."],
      ["", "Traiter, livrer et suivre vos commandes et vos courses."],
      ["", "Vous envoyer des notifications liées à vos commandes/courses."],
      ["", "Améliorer la qualité et la sécurité du service."],
    ],
  },
  {
    n: "03",
    title: "Partage des données",
    intro: "Nous partageons le strict nécessaire avec :",
    items: [
      ["Restaurants et livreurs partenaires,", "pour exécuter votre commande."],
      ["Chauffeurs VTC,", "pour réaliser votre course."],
      [
        "Prestataires techniques :",
        "Google Firebase (authentification, base de données, notifications, hébergement), OpenRouteService (calcul d'itinéraires à partir de votre position) et OpenStreetMap / Nominatim (recherche et conversion d'adresses).",
      ],
    ],
    outro: "Nous ne vendons jamais vos données personnelles.",
  },
  {
    n: "04",
    title: "Sécurité",
    text: "Vos données sont stockées via l'infrastructure sécurisée de Google Firebase et protégées par des règles d'accès. Les communications sont chiffrées (HTTPS).",
  },
  {
    n: "05",
    title: "Conservation et suppression",
    text: "Nous conservons vos données tant que votre compte est actif. Vous pouvez demander la suppression de votre compte à tout moment (voir contact) ; votre demande est traitée sous 30 jours maximum.",
    items: [
      [
        "Supprimés immédiatement :",
        "votre profil (nom, e-mail, téléphone, photo), vos identifiants de connexion et votre accès à l'Application.",
      ],
    ],
    table: {
      head: ["Donnée conservée", "Motif", "Durée"],
      rows: [
        [
          "Historique de vos commandes et courses passées",
          "Obligations comptables et gestion d'éventuels litiges",
          "3 ans après la suppression du compte, puis suppression définitive",
        ],
      ],
    },
  },
  {
    n: "06",
    title: "Vos droits",
    text: "Vous pouvez accéder à vos données, les corriger ou demander leur suppression en nous contactant à l'adresse ci-dessous.",
  },
  {
    n: "07",
    title: "Enfants",
    text: "L'Application n'est pas destinée aux enfants de moins de 13 ans.",
  },
  {
    n: "08",
    title: "Modifications",
    text: "Cette politique peut être mise à jour. La date en haut indique la dernière version.",
  },
];

export default function Confidentialite() {
  return (
    <>
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-neon/10 py-3">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Velox — accueil">
            <Logo size="sm" />
          </Link>
          <Link
            href="/#telecharger"
            className="btn-neon rounded-full px-6 py-2.5 text-sm font-bold"
          >
            Télécharger
          </Link>
        </nav>
      </header>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <Link href="/" className="text-sm font-semibold text-muted transition hover:text-neon">
          ← Retour à l'accueil
        </Link>

        <h1 className="mt-7 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Politique de confidentialité
        </h1>
        <span className="mt-3 block text-sm font-semibold text-neon-soft">
          Dernière mise à jour : 9 août 2026
        </span>

        <p className="mt-6 border-b border-white/5 pb-8 text-lg text-mist">
          L'application Velox (« l'Application »), éditée par Velox Corp (« nous »), est un service de
          livraison de repas et de transport (VTC) opérant à Djibouti. Cette politique explique
          quelles données nous collectons, pourquoi, et quels sont vos droits.
        </p>

        {sections.map((s) => (
          <SectionBlock key={s.n} section={s} />
        ))}

        <div className="mt-12 rounded-2xl border border-neon/20 bg-charcoal px-7 py-7">
          <h3 className="font-display text-lg font-bold">09 — Contact</h3>
          <p className="mt-2 text-mist">
            Pour toute question relative à vos données :
            <br />
            <a href={MAILTO} className="font-semibold text-neon">
              {CONTACT_EMAIL}
            </a>
            <br />
            <a href={CONTACT_PHONE_HREF} className="font-semibold text-neon">
              {CONTACT_PHONE}
            </a>
          </p>
        </div>
      </main>

      <footer className="border-t border-white/5 bg-ink">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-5 py-8 text-sm text-faint sm:px-8">
          <p>© 2026 Velox — Édité par Velox Corp. Tous droits réservés.</p>
          <Link href="/" className="text-neon">
            Retour à l'accueil
          </Link>
        </div>
      </footer>
    </>
  );
}
