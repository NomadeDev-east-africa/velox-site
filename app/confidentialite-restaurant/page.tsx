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
  title: "Politique de confidentialité — Velox Restaurant",
  description:
    "Politique de confidentialité de l'application Velox Restaurant (dj.nomade.velox_restaurant) : données collectées, absence de géolocalisation, permissions Android, conservation et droits des restaurants partenaires.",
};

const sections: Section[] = [
  {
    n: "01",
    title: "Présentation",
    text: "Velox Restaurant est une application Android de gestion professionnelle destinée exclusivement aux restaurants partenaires de la plateforme Velox. Elle permet la réception des commandes en temps réel, la gestion du menu, le suivi des performances et la coordination avec les livreurs. Elle n'est pas accessible au grand public.",
  },
  {
    n: "02",
    title: "Données collectées",
    intro: "Données fournies par le restaurant partenaire :",
    items: [
      ["Adresse e-mail :", "authentification et identification du compte restaurant."],
      [
        "Mot de passe :",
        "sécurisation de l'accès. Il est haché par Firebase Auth et n'est jamais accessible en clair par l'éditeur.",
      ],
      ["Nom du restaurant :", "affichage dans l'application client et sur la plateforme."],
      ["Adresse du restaurant :", "coordination des collectes et des livraisons."],
      ["Numéro de téléphone :", "contact et coordination opérationnelle."],
      [
        "Photo de bannière et photos des plats :",
        "personnalisation du profil et affichage du menu dans l'application client.",
      ],
    ],
    outro: (
      <>
        Données collectées automatiquement : <strong className="text-white">jeton FCM</strong> (notifications
        de nouvelles commandes) · <strong className="text-white">données de session Firebase Auth</strong>{" "}
        (maintien de la connexion) · <strong className="text-white">rapports de plantage Crashlytics</strong>{" "}
        · <strong className="text-white">données d&apos;utilisation anonymisées Firebase Analytics</strong>.
      </>
    ),
  },
  {
    n: "03",
    title: "Données que l'application ne collecte pas",
    highlight: true,
    text: "Cette application est un outil de gestion utilisé depuis l'établissement. Elle n'a besoin d'aucune donnée de position pour fonctionner.",
    callout: (
      <>
        L&apos;application <strong className="text-white">ne collecte aucune donnée de localisation GPS</strong>{" "}
        et ne déclare <strong className="text-white">aucune permission de localisation</strong> dans son
        manifeste Android — ni <Code>ACCESS_FINE_LOCATION</Code>, ni <Code>ACCESS_COARSE_LOCATION</Code>,
        ni <Code>ACCESS_BACKGROUND_LOCATION</Code>. L&apos;adresse du restaurant est une donnée saisie
        manuellement dans le profil, jamais une position relevée par l&apos;appareil.
      </>
    ),
    outro: (
      <>
        Ne sont pas non plus collectés : les contacts du téléphone, le contenu des SMS ou des appels, les
        données biométriques, ainsi que les informations bancaires ou de paiement.
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
        "liant le restaurant partenaire à Velox Corp (compte, profil, réception et traitement des commandes).",
      ],
      [
        "Consentement",
        "pour les photos de bannière et de plats, téléversées volontairement par le partenaire.",
      ],
      [
        "Intérêt légitime",
        "de la plateforme pour la stabilité et la sécurité du service (notifications, Crashlytics, analytics).",
      ],
    ],
  },
  {
    n: "05",
    title: "Partage des données",
    table: {
      head: ["Destinataire", "Données partagées", "Raison"],
      rows: [
        [
          "Application client Velox",
          "Nom, adresse, bannière, menu et photos des plats",
          "Affichage de l'établissement et prise de commande",
        ],
        [
          "Livreurs partenaires",
          "Nom du restaurant, adresse de collecte",
          "Exécution de la livraison, lors de la validation d'une commande",
        ],
        [
          "Firebase (Google)",
          "Compte, profil, menu, commandes, photos",
          "Infrastructure technique (sous-traitant)",
        ],
        ["Firebase Crashlytics", "Données techniques anonymisées", "Correction de bugs"],
        [
          "Autorités compétentes",
          "Données requises par la loi",
          "Uniquement si la loi djiboutienne l'exige",
        ],
      ],
    },
    outro: (
      <strong className="text-white">
        Vos données ne sont jamais vendues, louées ni partagées à des fins commerciales.
      </strong>
    ),
  },
  {
    n: "06",
    title: "Services tiers",
    intro:
      "L'application s'appuie sur les services Firebase de Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) :",
    items: [
      ["Firebase Authentication :", "gestion des comptes et des sessions."],
      ["Firebase Firestore :", "stockage et synchronisation des données en temps réel."],
      ["Firebase Storage :", "stockage des photos de plats et de bannières."],
      ["Firebase Cloud Messaging :", "notifications push de nouvelles commandes."],
      ["Firebase Cloud Functions :", "traitements serveur liés aux commandes."],
      [
        "Firebase App Check (Play Integrity) :",
        "vérification de l'authenticité de l'application pour bloquer les accès frauduleux.",
      ],
      ["Firebase Crashlytics et Analytics :", "diagnostics et statistiques anonymisés."],
    ],
    outro:
      "Les données peuvent être transférées et traitées sur des serveurs situés aux États-Unis. Google LLC est soumis au mécanisme EU-U.S. Data Privacy Framework.",
  },
  {
    n: "07",
    title: "Conservation",
    table: {
      head: ["Donnée", "Durée"],
      rows: [
        ["Données de compte (e-mail, profil restaurant)", "Jusqu'à la suppression du compte partenaire"],
        ["Historique des commandes", "2 ans à compter de la date de commande"],
        ["Photos (plats, bannières)", "Jusqu'à suppression manuelle par l'utilisateur"],
        ["Données analytiques anonymisées", "14 mois (paramètre Google Analytics)"],
        ["Rapports de plantage Crashlytics", "90 jours (paramètre Crashlytics)"],
        ["Jeton FCM", "Mis à jour automatiquement, supprimé à la déconnexion"],
      ],
    },
  },
  {
    n: "08",
    title: "Permissions Android",
    table: {
      head: ["Permission", "Raison"],
      rows: [
        [<Code key="p1">POST_NOTIFICATIONS</Code>, "Notifications de nouvelles commandes"],
        [
          <span key="p2" className="inline-flex flex-wrap gap-1">
            <Code>WAKE_LOCK</Code> <Code>USE_FULL_SCREEN_INTENT</Code> <Code>VIBRATE</Code>
          </span>,
          "Alerte sonore et visuelle de nouvelle commande, y compris écran verrouillé",
        ],
        [
          <span key="p3" className="inline-flex flex-wrap gap-1">
            <Code>READ_MEDIA_IMAGES</Code> <Code>READ_EXTERNAL_STORAGE</Code>
          </span>,
          "Sélection des photos de plats et de bannière depuis la galerie (READ_EXTERNAL_STORAGE limitée à Android 12 et antérieur)",
        ],
        [
          <span key="p4" className="inline-flex flex-wrap gap-1">
            <Code>INTERNET</Code> <Code>ACCESS_NETWORK_STATE</Code>
          </span>,
          "Synchronisation avec les serveurs et vérification de la connectivité",
        ],
      ],
    },
    callout: (
      <>
        L&apos;application ne demande <strong className="text-white">aucune</strong> des permissions suivantes :{" "}
        <Code>ACCESS_FINE_LOCATION</Code>, <Code>ACCESS_COARSE_LOCATION</Code>,{" "}
        <Code>ACCESS_BACKGROUND_LOCATION</Code>, <Code>CAMERA</Code>, <Code>READ_CONTACTS</Code>,{" "}
        <Code>READ_SMS</Code>.
      </>
    ),
    outro:
      "Chaque permission est révocable à tout moment depuis les paramètres Android de l'appareil. Révoquer les notifications n'empêche pas l'accès à l'application, mais supprime les alertes de nouvelles commandes en temps réel.",
  },
  {
    n: "09",
    title: "Sécurité",
    items: [
      ["Chiffrement :", "communications chiffrées en transit via HTTPS/TLS."],
      [
        "Authentification :",
        "Firebase Auth, mots de passe hachés et jamais accessibles en clair par l'éditeur.",
      ],
      [
        "Cloisonnement :",
        "l'accès aux données Firestore est restreint aux utilisateurs authentifiés via les Security Rules.",
      ],
      [
        "Compte actif :",
        <>
          l&apos;accès à l&apos;application est conditionné à un compte partenaire actif (
          <Code>isActive == true</Code>).
        </>,
      ],
      [
        "Intégrité :",
        "vérification de l'authenticité de l'application via Google Play Integrity API (App Check).",
      ],
    ],
  },
  {
    n: "10",
    title: "Notifications push",
    text: "L'application utilise les notifications push (FCM) pour alerter le restaurant en temps réel des nouvelles commandes. Ces notifications sont essentielles au fonctionnement du service. Elles peuvent être désactivées depuis Paramètres Android → Applications → Velox Restaurant → Notifications, sans que cela affecte l'accès à l'application.",
  },
  {
    n: "11",
    title: "Vos droits",
    intro: "En tant que restaurant partenaire, vous disposez des droits suivants :",
    items: [
      ["Accès", "à une copie de vos données personnelles."],
      ["Rectification", "directement dans l'application, depuis l'écran Profil."],
      ["Effacement", "de votre compte et de vos données."],
      ["Portabilité", "de vos données dans un format structuré."],
      ["Opposition", "au traitement fondé sur l'intérêt légitime."],
    ],
    outro: (
      <>
        Pour exercer ces droits :{" "}
        <EmailLinks />{" "}
        — réponse garantie sous <strong className="text-white">30 jours</strong>.
      </>
    ),
    cta: {
      href: "/suppression-donnees-restaurant",
      label: "Demander la suppression de mes données →",
    },
  },
  {
    n: "12",
    title: "Données des mineurs",
    text: "L'application est destinée à un usage professionnel exclusivement et réservée aux personnes majeures (18 ans et plus). Aucune donnée relative à des mineurs n'est collectée sciemment.",
  },
  {
    n: "13",
    title: "Modifications",
    text: "Toute modification substantielle de cette politique est notifiée via une notification dans l'application ou par e-mail. La date de dernière mise à jour figure en haut du document.",
  },
];

export default function ConfidentialiteRestaurant() {
  return (
    <LegalPage title="Politique de confidentialité — Velox Restaurant" updated="27 juillet 2026">
      <p className="mt-6 border-b border-white/5 pb-8 text-lg text-mist">
        L&apos;application <strong className="text-white">Velox Restaurant</strong>{" "}
        (<Code>dj.nomade.velox_restaurant</Code>), éditée par{" "}
        <strong className="text-white">Velox Corp</strong>, est un outil de gestion réservé aux
        restaurants partenaires en République de Djibouti. Elle est{" "}
        <strong className="text-white">distincte</strong> de l&apos;application client Velox et fait
        l&apos;objet de la présente politique, qui lui est propre. Contact :{" "}
        <EmailLinks />
        .
      </p>

      {sections.map((s) => (
        <SectionBlock key={s.n} section={s} />
      ))}

      <ContactCard
        n="14"
        editor="Velox Corp — éditeur de l'application Velox Restaurant, République de Djibouti."
        related={{
          href: "/suppression-donnees-restaurant",
          label: "Suppression des données — Velox Restaurant",
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
        <Link href="/confidentialite-driver" className="font-semibold text-neon">
          app chauffeur
        </Link>
      </p>
    </LegalPage>
  );
}
