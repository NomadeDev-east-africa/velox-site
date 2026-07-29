import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  AppIdentityCard,
  CONTACT_EMAIL,
  ContactCard,
  DeletionSteps,
  LegalPage,
  LegalTable,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Suppression des données — Velox Livreur",
  description:
    "Comment demander la suppression de votre compte et de vos données personnelles dans l'application Velox Livreur (dj.nomade.velox_livreur), éditée par Velox Corp.",
};

const SUBJECT = "?subject=Suppression%20de%20mes%20donn%C3%A9es%20%E2%80%94%20Velox%20Livreur";
const MAILTO = `mailto:${CONTACT_EMAIL}${SUBJECT}`;

const steps: ReactNode[] = [
  <>
    Envoyer un e-mail à{" "}
    <a href={MAILTO} className="font-semibold text-neon">
      {CONTACT_EMAIL}
    </a>{" "}
    avec pour objet «&nbsp;Suppression de mes données — Velox Livreur&nbsp;».
  </>,
  <>Indiquer l&apos;adresse e-mail associée au compte livreur.</>,
  <>
    Préciser s&apos;il s&apos;agit d&apos;une suppression totale du compte ou seulement de certaines
    données.
  </>,
  <>Une confirmation d&apos;identité peut être demandée afin de protéger le compte.</>,
  <>
    La demande est traitée sous <strong className="text-white">30 jours maximum</strong> ; une
    confirmation écrite est envoyée une fois la suppression effectuée.
  </>,
];

const deleted: ReactNode[][] = [
  ["Compte Firebase Auth et identifiants de connexion"],
  ["Nom, adresse e-mail, numéro de téléphone"],
  ["Photo de profil"],
  ["Données du véhicule (immatriculation, marque, modèle, année, couleur)"],
  ["Dernière position GPS connue"],
  ["Token de notification FCM"],
  ["Photos de preuve de livraison"],
];

const kept: ReactNode[][] = [
  [
    "Historique des livraisons et montants associés",
    "Obligation comptable et fiscale",
    "3 ans",
  ],
  [
    "Données de crash Crashlytics (anonymisées)",
    "Rétention technique Firebase, non modifiable individuellement",
    "90 jours",
  ],
];

export default function SuppressionDonneesLivreur() {
  return (
    <LegalPage title="Suppression des données — Velox Livreur" updated="27 juillet 2026">
      <AppIdentityCard
        appName="Velox Livreur"
        packageId="dj.nomade.velox_livreur"
        editor="Velox Corp"
      />

      <section className="mt-10">
        <h2 className="flex items-baseline gap-3 font-display text-xl font-bold">
          <span className="font-display text-base font-bold text-neon">01</span>
          Comment demander la suppression de vos données
        </h2>
        <DeletionSteps steps={steps} mailto={MAILTO} />
      </section>

      <section className="mt-12">
        <h2 className="flex items-baseline gap-3 font-display text-xl font-bold">
          <span className="font-display text-base font-bold text-neon">02</span>
          Données supprimées à votre demande
        </h2>
        <p className="mt-3 text-mist">
          Les données suivantes sont définitivement effacées de nos systèmes :
        </p>
        <LegalTable head={["Donnée supprimée"]} rows={deleted} />
      </section>

      <section className="mt-12">
        <h2 className="flex items-baseline gap-3 font-display text-xl font-bold">
          <span className="font-display text-base font-bold text-neon">03</span>
          Données conservées après la demande
        </h2>
        <p className="mt-3 text-mist">
          Certaines données doivent être conservées pour des raisons légales ou techniques. Elles ne
          sont plus rattachées à un compte actif et sont supprimées à l&apos;expiration des durées
          indiquées :
        </p>
        <LegalTable head={["Donnée conservée", "Motif", "Durée"]} rows={kept} />
      </section>

      <ContactCard
        n="04"
        editor="Velox Corp — éditeur de l'application Velox Livreur."
        related={{
          href: "/confidentialite-livreur",
          label: "Politique de confidentialité — Velox Livreur",
        }}
      />

      <p className="mt-6 text-sm text-muted">
        Autres applications :{" "}
        <Link href="/suppression-donnees-driver" className="font-semibold text-neon">
          app chauffeur
        </Link>{" "}
        ·{" "}
        <Link href="/suppression-donnees-restaurant" className="font-semibold text-neon">
          app restaurant
        </Link>
      </p>
    </LegalPage>
  );
}
