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
  title: "Suppression des données — Velox Driver",
  description:
    "Comment demander la suppression de votre compte et de vos données personnelles dans l'application Velox Driver (dj.nomade.velox_driver), éditée par Velox Corp.",
};

const SUBJECT = "?subject=Suppression%20de%20mes%20donn%C3%A9es%20%E2%80%94%20Velox%20Driver";
const MAILTO = `mailto:${CONTACT_EMAIL}${SUBJECT}`;

const steps: ReactNode[] = [
  <>
    Envoyer un e-mail à{" "}
    <a href={MAILTO} className="font-semibold text-neon">
      {CONTACT_EMAIL}
    </a>{" "}
    avec pour objet «&nbsp;Suppression de mes données — Velox Driver&nbsp;».
  </>,
  <>Indiquer l&apos;adresse e-mail associée au compte chauffeur.</>,
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
  ["Données du véhicule (type, immatriculation, couleur, modèle, identifiant)"],
  ["Dernière position GPS connue"],
  ["Jeton de notification FCM"],
  ["Association entre votre identité et l'historique des courses"],
];

const kept: ReactNode[][] = [
  [
    "Historique des courses et montants associés",
    "Obligation comptable et fiscale",
    "3 ans",
  ],
  [
    "Rapports de plantage Crashlytics (anonymisés)",
    "Rétention technique Firebase, non modifiable individuellement",
    "90 jours",
  ],
];

export default function SuppressionDonneesDriver() {
  return (
    <LegalPage title="Suppression des données — Velox Driver" updated="27 juillet 2026">
      <AppIdentityCard
        appName="Velox Driver"
        packageId="dj.nomade.velox_driver"
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
        editor="Velox Corp — éditeur de l'application Velox Driver, République de Djibouti."
        related={{
          href: "/confidentialite-driver",
          label: "Politique de confidentialité — Velox Driver",
        }}
      />

      <p className="mt-6 text-sm text-muted">
        Autres applications :{" "}
        <Link href="/suppression-donnees-livreur" className="font-semibold text-neon">
          app livreur
        </Link>{" "}
        ·{" "}
        <Link href="/suppression-donnees-restaurant" className="font-semibold text-neon">
          app restaurant
        </Link>
      </p>
    </LegalPage>
  );
}
