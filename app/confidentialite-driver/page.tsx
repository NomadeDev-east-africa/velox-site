import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  EmailLinks,
  LegalPage,
  SectionBlock,
  ContactCard,
  type Section,
} from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité — Velox Driver",
  description:
    "Politique de confidentialité de l'application Velox Driver (dj.nomade.velox_driver) : données collectées, localisation en temps réel, permissions Android, conservation et droits des chauffeurs VTC.",
};

const sections: Section[] = [
  {
    n: "01",
    title: "Présentation",
    text: "Velox Driver est une application Android destinée exclusivement aux chauffeurs de taxi et VTC partenaires opérant en République de Djibouti. Elle permet la réception et la gestion des demandes de course, la navigation, le suivi des gains et la mise en relation avec les passagers.",
  },
  {
    n: "02",
    title: "Données collectées",
    items: [
      [
        "Compte chauffeur :",
        "nom complet (identification auprès des passagers) · adresse e-mail (authentification) · numéro de téléphone (contact passager pendant la course) · photo de profil (affichage aux passagers).",
      ],
      [
        "Véhicule :",
        "type de véhicule (mise en relation avec la demande passager) · numéro d'immatriculation et identifiant du véhicule (identification) · couleur et modèle (identification visuelle par le passager).",
      ],
      [
        "Courses :",
        "points de départ et d'arrivée · distance parcourue (calcul du tarif) · durée estimée et réelle · montant du tarif (facturation et gains) · statuts de course et horodatage de chaque étape (suivi en temps réel et traçabilité).",
      ],
      [
        "Technique :",
        <>
          jeton FCM (notifications de nouvelles courses) · rapports de plantage Firebase Crashlytics
          (correction de bugs) · événements d&apos;utilisation anonymisés Firebase Analytics.
        </>,
      ],
    ],
    outro: (
      <>
        La photo de profil et les informations du véhicule sont renseignées lors de l&apos;inscription
        du chauffeur partenaire. <strong className="text-white">L&apos;application n&apos;accède ni à
        l&apos;appareil photo ni à la galerie</strong> de l&apos;appareil.
      </>
    ),
  },
  {
    n: "03",
    title: "Localisation en temps réel",
    highlight: true,
    text: (
      <>
        L&apos;application collecte la position GPS en temps réel <strong className="text-white">uniquement</strong>{" "}
        lorsque le chauffeur est connecté et qu&apos;il s&apos;est mis <strong className="text-white">« en ligne »</strong>.
        La collecte s&apos;effectue via un service de premier plan Android (
        <Code>LocationForegroundService</Code>, <Code>foregroundServiceType=&quot;location&quot;</Code>),
        signalé en permanence par une <strong className="text-white">notification visible</strong> que le
        chauffeur peut consulter à tout moment.
      </>
    ),
    callout: (
      <>
        L&apos;application <strong className="text-white">ne demande pas</strong> la permission de localisation en
        arrière-plan (<Code>ACCESS_BACKGROUND_LOCATION</Code>). La seule autorisation « pendant
        l&apos;utilisation de l&apos;application » suffit. La position <strong className="text-white">n&apos;est
        pas collectée</strong> lorsque le chauffeur est hors ligne, s&apos;est déconnecté ou a fermé
        l&apos;application.
      </>
    ),
    outro: (
      <>
        <strong className="text-white">Utilisation :</strong> mise en relation avec les passagers proches,
        affichage de la position au passager pendant la course et calcul d&apos;itinéraire. Les données
        collectées sont la latitude, la longitude et l&apos;horodatage de la position.
      </>
    ),
  },
  {
    n: "04",
    title: "Base légale",
    intro: "Les traitements décrits ci-dessus reposent sur les bases légales suivantes :",
    items: [
      [
        "Exécution du contrat",
        "liant le chauffeur partenaire à Velox (mise en relation, déroulement des courses, calcul des gains).",
      ],
      [
        "Intérêt légitime",
        "de la plateforme pour la fiabilité et la sécurité du service (Crashlytics, analytics, notifications).",
      ],
      [
        "Consentement explicite",
        "pour la localisation, demandé via la boîte de dialogue système Android à la première utilisation et révocable à tout moment.",
      ],
    ],
  },
  {
    n: "05",
    title: "Partage des données",
    intro: "Pendant une course, le passager a accès à votre nom, votre photo de profil, votre numéro de téléphone, les informations visibles de votre véhicule et votre position en temps réel.",
    table: {
      head: ["Destinataire", "Données partagées", "Raison"],
      rows: [
        [
          "Passager de la course",
          "Nom, photo, téléphone, véhicule, position en temps réel",
          "Identification du chauffeur et suivi de la course",
        ],
        [
          "Google Firebase",
          "Compte, localisation, courses",
          "Authentification, base de données, notifications",
        ],
        [
          <>
            OSRM <Code>router.project-osrm.org</Code>
          </>,
          "Coordonnées GPS du chauffeur et coordonnées du point de destination",
          "Calcul de l'itinéraire routier affiché sur la carte",
        ],
        [
          <>
            CARTO <Code>basemaps.cartocdn.com</Code>
          </>,
          "Coordonnées de la zone de carte affichée, adresse IP",
          "Fourniture des fonds de carte",
        ],
        ["Firebase Crashlytics", "Rapports de plantage anonymisés", "Correction de bugs"],
      ],
    },
    callout: (
      <>
        <strong className="text-white">Précision sur les services cartographiques :</strong> le calcul
        d&apos;itinéraire transmet à OSRM la position du chauffeur et le point de destination, sans nom
        ni identifiant de compte. L&apos;affichage de la carte transmet à CARTO la zone géographique
        consultée. Aucune de ces requêtes ne contient d&apos;identité, de numéro de téléphone ou
        d&apos;identifiant de course.
      </>
    ),
    outro: (
      <>
        Aucun autre tiers n&apos;a accès à vos données.{" "}
        <strong className="text-white">
          Vos données ne sont jamais vendues à des tiers ni utilisées à des fins publicitaires.
        </strong>
      </>
    ),
  },
  {
    n: "06",
    title: "Conservation",
    table: {
      head: ["Donnée", "Durée"],
      rows: [
        ["Données du compte chauffeur", "Durée d'activité du compte"],
        ["Historique des courses et gains", "3 ans (obligations comptables)"],
        ["Position GPS (dernière connue)", "Écrasée à chaque mise à jour, effacée hors ligne"],
        ["Jeton FCM", "Effacé à la déconnexion, renouvelé à la connexion"],
        ["Données Crashlytics", "90 jours (politique Firebase)"],
      ],
    },
    outro: "En cas de demande de suppression du compte, les données actives sont supprimées dans un délai de 30 jours.",
  },
  {
    n: "07",
    title: "Permissions Android",
    table: {
      head: ["Permission", "Raison"],
      rows: [
        [
          <Code key="p1">ACCESS_FINE_LOCATION</Code>,
          "Localisation GPS précise pour la mise en relation avec les passagers",
        ],
        [<Code key="p2">ACCESS_COARSE_LOCATION</Code>, "Localisation approximative de secours"],
        [
          <span key="p3" className="inline-flex flex-wrap gap-1">
            <Code>FOREGROUND_SERVICE</Code> <Code>FOREGROUND_SERVICE_LOCATION</Code>
          </span>,
          "Service de localisation avec notification visible",
        ],
        [<Code key="p4">POST_NOTIFICATIONS</Code>, "Notifications de nouvelles demandes de course"],
        [
          <span key="p5" className="inline-flex flex-wrap gap-1">
            <Code>INTERNET</Code> <Code>ACCESS_NETWORK_STATE</Code>
          </span>,
          "Communication avec les serveurs Firebase et vérification de la connectivité",
        ],
        [<Code key="p6">WAKE_LOCK</Code>, "Maintien du service actif pendant une course"],
      ],
    },
    callout: (
      <>
        L&apos;application ne demande <strong className="text-white">aucune</strong> des permissions suivantes :{" "}
        <Code>ACCESS_BACKGROUND_LOCATION</Code>, <Code>CAMERA</Code>, <Code>READ_MEDIA_IMAGES</Code>,{" "}
        <Code>READ_CONTACTS</Code>, <Code>READ_SMS</Code>.
      </>
    ),
    outro:
      "Chaque permission est révocable à tout moment depuis les paramètres Android de l'appareil. Révoquer la localisation désactive la mise en relation et empêche donc la réception de nouvelles courses.",
  },
  {
    n: "08",
    title: "Sécurité",
    items: [
      ["Chiffrement :", "communications chiffrées en transit via HTTPS/TLS."],
      ["Authentification :", "Firebase Auth, obligatoire pour tout accès aux données."],
      [
        "Hébergement :",
        "serveurs Google Firebase, dans les datacenters Google. Les données peuvent être traitées aux États-Unis ; Google LLC est soumis au mécanisme EU-U.S. Data Privacy Framework.",
      ],
      [
        "Cloisonnement :",
        "les règles Firestore limitent chaque chauffeur à ses propres données uniquement.",
      ],
      ["Notifications :", "le jeton FCM est effacé des serveurs à chaque déconnexion."],
    ],
  },
  {
    n: "09",
    title: "Vos droits",
    intro: "En tant que chauffeur partenaire, vous disposez des droits suivants :",
    items: [
      ["Accès", "à l'ensemble des données vous concernant, sur demande par e-mail."],
      ["Rectification", "directement dans l'application, depuis l'écran profil."],
      ["Effacement", "de votre compte et de vos données — traitement sous 30 jours."],
      ["Portabilité", "de vos données dans un format structuré, sur demande."],
      ["Opposition", "au traitement fondé sur l'intérêt légitime."],
    ],
    outro: (
      <>
        Pour exercer ces droits, écrivez à{" "}
        <EmailLinks />{" "}
        en indiquant l&apos;adresse e-mail associée à votre compte. Réponse sous{" "}
        <strong className="text-white">15 jours ouvrés</strong>.
      </>
    ),
    cta: {
      href: "/suppression-donnees-driver",
      label: "Demander la suppression de mes données →",
    },
  },
  {
    n: "10",
    title: "Données des mineurs",
    text: "L'application est réservée aux chauffeurs professionnels majeurs (18 ans et plus). Aucune donnée relative à des mineurs n'est collectée sciemment.",
  },
  {
    n: "11",
    title: "Modifications",
    text: "Toute modification substantielle de cette politique est notifiée via une notification dans l'application ou par e-mail. La date de dernière mise à jour figure en haut du document.",
  },
];

export default function ConfidentialiteDriver() {
  return (
    <LegalPage title="Politique de confidentialité — Velox Driver" updated="27 juillet 2026">
      <p className="mt-6 border-b border-white/5 pb-8 text-lg text-mist">
        L&apos;application <strong className="text-white">Velox Driver</strong>{" "}
        (<Code>dj.nomade.velox_driver</Code>), éditée par{" "}
        <strong className="text-white">Velox Corp</strong>, est réservée aux chauffeurs de taxi et VTC
        partenaires de la plateforme Velox en République de Djibouti. Elle est{" "}
        <strong className="text-white">distincte</strong> de l&apos;application client Velox et fait
        l&apos;objet de la présente politique, qui lui est propre. Contact :{" "}
        <EmailLinks />
        .
      </p>

      {sections.map((s) => (
        <SectionBlock key={s.n} section={s} />
      ))}

      <ContactCard
        n="12"
        editor="Velox Corp — éditeur de l'application Velox Driver, République de Djibouti."
        related={{
          href: "/suppression-donnees-driver",
          label: "Suppression des données — Velox Driver",
        }}
      />

      <p className="mt-6 text-sm text-muted">
        Autres applications :{" "}
        <Link href="/confidentialite" className="font-semibold text-neon">
          app client
        </Link>{" "}
        ·{" "}
        <Link href="/confidentialite-livreur" className="font-semibold text-neon">
          app livreur
        </Link>{" "}
        ·{" "}
        <Link href="/confidentialite-restaurant" className="font-semibold text-neon">
          app restaurant
        </Link>
      </p>
    </LegalPage>
  );
}
