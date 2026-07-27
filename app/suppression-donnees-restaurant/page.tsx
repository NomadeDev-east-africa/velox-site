import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  AppIdentityCard,
  Callout,
  CONTACT_EMAILS,
  ContactCard,
  DeletionSteps,
  LegalPage,
  LegalTable,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Suppression des données — Velox Restaurant",
  description:
    "Comment demander la suppression de votre compte et de vos données personnelles dans l'application Velox Restaurant (dj.nomade.velox_restaurant), éditée par Velox Corp.",
};

const SUBJECT = "?subject=Suppression%20de%20mes%20donn%C3%A9es%20%E2%80%94%20Velox%20Restaurant";
const MAILTO = `mailto:${CONTACT_EMAILS[0]}${SUBJECT}`;
const MAILTO_ALT = `mailto:${CONTACT_EMAILS[1]}${SUBJECT}`;

const steps: ReactNode[] = [
  <>
    Envoyer un e-mail à{" "}
    <a href={MAILTO} className="font-semibold text-neon">
      {CONTACT_EMAILS[0]}
    </a>{" "}
    ou{" "}
    <a href={MAILTO_ALT} className="font-semibold text-neon">
      {CONTACT_EMAILS[1]}
    </a>{" "}
    avec pour objet «&nbsp;Suppression de mes données — Velox Restaurant&nbsp;».
  </>,
  <>Indiquer l&apos;adresse e-mail associée au compte restaurant partenaire.</>,
  <>
    Préciser s&apos;il s&apos;agit d&apos;une suppression totale du compte ou seulement de certaines
    données (par exemple les photos du menu).
  </>,
  <>Une confirmation d&apos;identité peut être demandée afin de protéger le compte.</>,
  <>
    La demande est traitée sous <strong className="text-white">30 jours maximum</strong> ; une
    confirmation écrite est envoyée une fois la suppression effectuée.
  </>,
];

const deleted: ReactNode[][] = [
  ["Compte Firebase Auth et identifiants de connexion"],
  ["Nom, adresse et numéro de téléphone du restaurant"],
  ["Photo de bannière et photos des plats (Firebase Storage)"],
  ["Menu, catégories, plats et suppléments"],
  ["Jeton de notification FCM"],
  ["Association entre votre compte et l'historique des commandes"],
];

const kept: ReactNode[][] = [
  [
    "Historique des commandes et montants associés",
    "Obligation comptable et fiscale",
    "2 ans à compter de la date de commande",
  ],
  [
    "Données analytiques anonymisées",
    "Rétention Google Analytics, non modifiable individuellement",
    "14 mois",
  ],
  [
    "Rapports de plantage Crashlytics (anonymisés)",
    "Rétention technique Firebase, non modifiable individuellement",
    "90 jours",
  ],
];

export default function SuppressionDonneesRestaurant() {
  return (
    <LegalPage title="Suppression des données — Velox Restaurant" updated="27 juillet 2026">
      <AppIdentityCard
        appName="Velox Restaurant"
        packageId="dj.nomade.velox_restaurant"
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
        <Callout>
          L&apos;application ne collectant{" "}
          <strong className="text-white">aucune donnée de localisation GPS</strong>, aucune donnée de
          position n&apos;est concernée par la suppression : il n&apos;en existe aucune.
        </Callout>
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
        editor="Velox Corp — éditeur de l'application Velox Restaurant, République de Djibouti."
        related={{
          href: "/confidentialite-restaurant",
          label: "Politique de confidentialité — Velox Restaurant",
        }}
      />

      <p className="mt-6 text-sm text-muted">
        Autres applications :{" "}
        <Link href="/suppression-donnees-livreur" className="font-semibold text-neon">
          app livreur
        </Link>{" "}
        ·{" "}
        <Link href="/suppression-donnees-driver" className="font-semibold text-neon">
          app chauffeur
        </Link>
      </p>
    </LegalPage>
  );
}
