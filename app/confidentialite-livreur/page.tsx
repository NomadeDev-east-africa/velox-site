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
  title: "Politique de confidentialité — Velox Livreur",
  description:
    "Politique de confidentialité de l'application Velox Livreur (dj.nomade.velox_livreur) : données collectées, localisation en temps réel, permissions Android, conservation et droits des livreurs partenaires.",
};

const sections: Section[] = [
  {
    n: "01",
    title: "Présentation",
    text: "Velox Livreur est une application Android destinée exclusivement aux livreurs partenaires de la plateforme Velox. Elle permet la gestion des commandes, le suivi GPS en temps réel pendant les livraisons et la communication avec la plateforme.",
  },
  {
    n: "02",
    title: "Données collectées",
    items: [
      [
        "Identification :",
        "adresse e-mail (authentification) · nom complet (affichage aux clients et restaurateurs) · numéro de téléphone (contact opérationnel) · photo de profil (identification visuelle).",
      ],
      [
        "Véhicule :",
        "type moto/vélo (affectation des commandes) · immatriculation (vérification réglementaire) · marque, modèle, année, couleur (identification du véhicule).",
      ],
      [
        "Livraison :",
        "historique des commandes livrées (calcul des gains, statistiques) · photo de preuve de livraison (confirmation de dépôt) · gains par livraison et total cumulé (suivi de rémunération) · note de satisfaction.",
      ],
      [
        "Technique :",
        <>
          token FCM (notifications push) · données de crash Firebase Crashlytics (débogage).
        </>,
      ],
    ],
    callout: (
      <>
        L&apos;application <strong className="text-white">n&apos;intègre pas</strong> Firebase Analytics
        ni aucun SDK publicitaire : aucune mesure d&apos;audience, aucun identifiant publicitaire
        (<Code>Advertising ID</Code>) n&apos;est collecté.
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
        lorsque le livreur est connecté <strong className="text-white">et</strong> qu&apos;il a activé le statut
        « Disponible ». La collecte s&apos;effectue via un service de premier plan Android
        (<Code>foregroundServiceType=&quot;location&quot;</Code>), signalé en permanence par une{" "}
        <strong className="text-white">notification visible</strong> que le livreur peut consulter à tout moment.
      </>
    ),
    callout: (
      <>
        L&apos;application <strong className="text-white">ne demande pas</strong> la permission de localisation en
        arrière-plan (<Code>ACCESS_BACKGROUND_LOCATION</Code>). La seule autorisation « pendant
        l&apos;utilisation de l&apos;application » suffit. Le suivi démarre lorsque le livreur passe
        « Disponible » et s&apos;arrête dès qu&apos;il quitte ce statut ou se déconnecte.
      </>
    ),
    outro: (
      <>
        <strong className="text-white">Utilisation :</strong> transmission de la position aux clients et à la
        plateforme pour le suivi de livraison en temps réel. La position est écrasée à chaque mise à
        jour (toutes les 10 secondes) ; seule la dernière position connue est conservée dans
        Firestore.
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
        "liant le livreur partenaire à Velox (localisation, gestion des commandes, rémunération).",
      ],
      [
        "Intérêt légitime",
        "de la plateforme pour la qualité et la sécurité du service (Crashlytics, analytics).",
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
    table: {
      head: ["Destinataire", "Données partagées", "Raison"],
      rows: [
        ["Client ayant passé commande", "Nom, localisation en temps réel", "Suivi de la livraison"],
        ["Restaurateur", "Nom, statut de la livraison", "Coordination de la préparation"],
        ["Firebase (Google)", "Toutes les données listées", "Infrastructure technique"],
        ["Firebase Crashlytics", "Données techniques anonymisées", "Correction de bugs"],
        [
          <>
            OSRM <Code>router.project-osrm.org</Code>
          </>,
          "Coordonnées GPS du livreur et coordonnées du point de livraison",
          "Calcul de l'itinéraire routier affiché sur la carte",
        ],
        [
          <>
            CARTO <Code>basemaps.cartocdn.com</Code>
          </>,
          "Coordonnées de la zone de carte affichée, adresse IP",
          "Fourniture des fonds de carte",
        ],
      ],
    },
    callout: (
      <>
        <strong className="text-white">Précision sur les services cartographiques :</strong> le calcul
        d&apos;itinéraire transmet à OSRM la position du livreur et le point de destination, sans nom
        ni identifiant de compte. L&apos;affichage de la carte transmet à CARTO la zone géographique
        consultée. Aucune de ces requêtes ne contient d&apos;identité, de numéro de téléphone ou
        d&apos;identifiant de commande.
      </>
    ),
    outro: (
      <strong className="text-white">Vos données ne sont jamais vendues à des tiers.</strong>
    ),
  },
  {
    n: "06",
    title: "Conservation",
    table: {
      head: ["Donnée", "Durée"],
      rows: [
        ["Données du compte livreur", "Durée de l'activité + 1 an après désactivation"],
        ["Historique des livraisons", "3 ans (obligations comptables)"],
        ["Photos de preuve de livraison", "90 jours"],
        ["Position GPS (dernière connue)", "Effacée à la déconnexion"],
        ["Token FCM", "Effacé à la déconnexion, renouvelé à la connexion"],
        ["Données Crashlytics", "90 jours (politique Firebase)"],
      ],
    },
  },
  {
    n: "07",
    title: "Permissions Android",
    table: {
      head: ["Permission", "Raison"],
      rows: [
        [<Code key="p1">ACCESS_FINE_LOCATION</Code>, "Localisation GPS précise pour le suivi de livraison"],
        [<Code key="p2">ACCESS_COARSE_LOCATION</Code>, "Localisation approximative (fallback)"],
        [
          <span key="p3" className="inline-flex flex-wrap gap-1">
            <Code>FOREGROUND_SERVICE</Code> <Code>FOREGROUND_SERVICE_LOCATION</Code>
          </span>,
          "Service de localisation avec notification visible",
        ],
        [<Code key="p4">POST_NOTIFICATIONS</Code>, "Notifications de nouvelles commandes"],
        [
          <span key="p5" className="inline-flex flex-wrap gap-1">
            <Code>INTERNET</Code> <Code>ACCESS_NETWORK_STATE</Code>
          </span>,
          "Synchronisation avec les serveurs Velox",
        ],
        [
          <span key="p6" className="inline-flex flex-wrap gap-1">
            <Code>WAKE_LOCK</Code> <Code>USE_FULL_SCREEN_INTENT</Code>
          </span>,
          "Alertes de nouvelle commande",
        ],
      ],
    },
    callout: (
      <>
        L&apos;application ne demande <strong className="text-white">aucune</strong> des permissions suivantes :{" "}
        <Code>ACCESS_BACKGROUND_LOCATION</Code>, <Code>CAMERA</Code>, <Code>READ_MEDIA_IMAGES</Code>. La
        photo de profil est prise via l&apos;application appareil-photo du système, qui ne requiert aucune
        permission côté Velox Livreur.
      </>
    ),
    outro:
      "Chaque permission est révocable à tout moment depuis les paramètres Android de l'appareil. Révoquer la localisation désactive le suivi en temps réel et empêche donc la prise de nouvelles courses.",
  },
  {
    n: "08",
    title: "Sécurité",
    items: [
      ["Chiffrement :", "communications chiffrées en transit via HTTPS/TLS."],
      ["Authentification :", "Firebase Auth (adresse e-mail et mot de passe)."],
      ["Hébergement :", "Firebase / Google Cloud, conforme aux standards ISO 27001."],
      [
        "Cloisonnement :",
        "l'accès à chaque document Firestore est restreint à son propriétaire via les Security Rules.",
      ],
      ["Notifications :", "le token FCM est effacé des serveurs à chaque déconnexion."],
    ],
  },
  {
    n: "09",
    title: "Vos droits",
    intro: "En tant que livreur partenaire, vous disposez des droits suivants :",
    items: [
      ["Accès", "à l'ensemble des données vous concernant."],
      ["Rectification", "directement dans l'application, depuis l'écran profil."],
      ["Effacement", "de votre compte et de vos données."],
      ["Opposition", "au traitement à des fins d'analytics."],
      ["Portabilité", "de vos données dans un format lisible."],
    ],
    outro: (
      <>
        Pour exercer ces droits :{" "}
        <EmailLinks />{" "}
        — réponse garantie sous <strong className="text-white">30 jours</strong>.
      </>
    ),
    cta: {
      href: "/suppression-donnees-livreur",
      label: "Demander la suppression de mes données →",
    },
  },
  {
    n: "10",
    title: "Données des mineurs",
    text: "L'application est réservée aux personnes majeures (18 ans et plus). Aucune donnée relative à des mineurs n'est collectée intentionnellement.",
  },
  {
    n: "11",
    title: "Modifications",
    text: "Toute modification substantielle de cette politique est notifiée via une notification dans l'application. La date de dernière mise à jour figure en haut du document.",
  },
];

export default function ConfidentialiteLivreur() {
  return (
    <LegalPage title="Politique de confidentialité — Velox Livreur" updated="27 juillet 2026">
      <p className="mt-6 border-b border-white/5 pb-8 text-lg text-mist">
          L&apos;application <strong className="text-white">Velox Livreur</strong>{" "}
          (<Code>dj.nomade.velox_livreur</Code>), éditée par{" "}
          <strong className="text-white">Velox Corp</strong>, est réservée aux livreurs partenaires de la
          plateforme Velox. Elle est <strong className="text-white">distincte</strong> de l&apos;application
          client Velox et fait l&apos;objet de la présente politique, qui lui est propre. Contact :{" "}
          <EmailLinks />
          .
        </p>

      {sections.map((s) => (
        <SectionBlock key={s.n} section={s} />
      ))}

      <ContactCard
        n="12"
        editor="Velox Corp — éditeur de l'application Velox Livreur."
        related={{
          href: "/suppression-donnees-livreur",
          label: "Suppression des données — Velox Livreur",
        }}
      />

      <p className="mt-6 text-sm text-muted">
        Autres applications :{" "}
        <Link href="/confidentialite" className="font-semibold text-neon">
          app client
        </Link>{" "}
        ·{" "}
        <Link href="/confidentialite-driver" className="font-semibold text-neon">
          app chauffeur
        </Link>{" "}
        ·{" "}
        <Link href="/confidentialite-restaurant" className="font-semibold text-neon">
          app restaurant
        </Link>
      </p>
    </LegalPage>
  );
}
