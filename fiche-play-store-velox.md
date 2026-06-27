# Fiche Google Play — Velox (dj.velox.client)

> Document prêt à copier-coller dans la **Play Console** (section « Fiche principale du Store »
> et « Détails de l'application »). Adapte les éléments marqués 🔧.

---

## 1. Nom de l'application
**Velox**

*Alternatives (max 30 caractères, mots-clés pour la recherche) :*
- `Velox – Livraison & Taxi` (24 car.)
- `Velox – Livraison & VTC Djibouti` (32 car. ❌ trop long, ne pas utiliser)

---

## 2. Description courte
*(max 80 caractères — celle-ci en fait 78)*

```
Livraison de repas et courses VTC à Djibouti, en quelques secondes.
```

*Alternative :*
```
Commandez vos repas et réservez votre course en quelques secondes.
```

---

## 3. Description complète
*(max 4000 caractères)*

```
Velox, c'est Djibouti à portée de main. Faites-vous livrer vos plats préférés et
réservez une course VTC depuis une seule application, simple et rapide.

« Chaque seconde compte. »

🍔 LIVRAISON DE REPAS
• Découvrez les meilleurs restaurants et fast-foods de Djibouti.
• Parcourez les menus, ajoutez vos plats au panier et commandez en quelques taps.
• Suivez votre commande en temps réel : préparation, départ du livreur, livraison.
• Visualisez la position de votre livreur sur la carte, en direct.

🚕 COURSES VTC
• Indiquez votre destination et obtenez un prix clair, sans surprise.
• Choisissez votre véhicule (Standard ou Confort).
• Suivez l'approche de votre chauffeur sur la carte.

💳 PAIEMENT FLEXIBLE
• Espèces, Waafi, D-Money, CAC Pay — payez comme vous voulez.

⭐ FIDÉLITÉ
• Gagnez des points à chaque commande et utilisez-les pour réduire vos frais.

🌍 POUR DJIBOUTI, EN PLUSIEURS LANGUES
• Application disponible en français, anglais, arabe, somali et afar.

Téléchargez Velox et gagnez du temps, chaque jour.
```

---

## 4. Catégorie
- **Type d'application :** Application
- **Catégorie recommandée :** **Alimentation et boissons** (*Food & Drink*)
  - L'app combine livraison de repas + VTC ; Play n'autorise qu'une catégorie principale.
  - Alternative possible : *Cartes et navigation* (*Maps & Navigation*) si l'axe VTC devient dominant.
- **Tags :** livraison, restaurant, repas, VTC, taxi, Djibouti

---

## 5. Langue
- **Langue par défaut de la fiche :** Français (France) — `fr-FR`
- **Langues prises en charge par l'app :** Français, Anglais, Arabe, Somali, Afar
  - 🔧 Tu peux ajouter des traductions de la fiche (description) pour l'anglais et l'arabe
    plus tard, dans Play Console → « Gérer les traductions ».

---

## 6. Adresse e-mail de contact
🔧 **devchirdon@gmail.com**

*Recommandation : si tu as un nom de domaine (ex. velox.dj), utilise plutôt une adresse
professionnelle type `contact@velox.dj` ou `support@velox.dj` — ça inspire plus confiance
et c'est mieux pour le support utilisateur.*

---

## 7. Politique de confidentialité (OBLIGATOIRE)

⚠️ Play **exige une URL publique** (pas un fichier). Étapes :
1. Héberge le texte ci-dessous sur une page publique gratuite :
   - **Google Sites**, **GitHub Pages**, ou **Firebase Hosting** (tu as déjà Firebase).
2. Colle l'URL obtenue dans Play Console → « Règles de confidentialité ».

URL à renseigner : 🔧 `https://…` (à créer)

---

### Texte de la politique de confidentialité (prêt à publier)

```
POLITIQUE DE CONFIDENTIALITÉ — VELOX

Dernière mise à jour : 27 juin 2026

L'application Velox (« l'Application »), éditée par Nomade (« nous »), est un service de
livraison de repas et de transport (VTC) opérant à Djibouti. Cette politique explique
quelles données nous collectons, pourquoi, et quels sont vos droits.

1. DONNÉES QUE NOUS COLLECTONS
- Informations de compte : nom, adresse e-mail, numéro de téléphone, photo de profil.
- Données de localisation : position GPS précise, utilisée pour la livraison de vos
  commandes et la réservation/suivi de vos courses VTC.
- Données d'utilisation : historique de commandes et de courses, adresses de livraison,
  moyen de paiement sélectionné (le paiement lui-même n'est pas traité dans l'app).
- Identifiants techniques : jeton de notification (Firebase Cloud Messaging) pour vous
  envoyer le suivi de vos commandes.

2. POURQUOI NOUS LES UTILISONS
- Créer et gérer votre compte et votre authentification.
- Traiter, livrer et suivre vos commandes et vos courses.
- Vous envoyer des notifications liées à vos commandes/courses.
- Améliorer la qualité et la sécurité du service.

3. PARTAGE DES DONNÉES
Nous partageons le strict nécessaire avec :
- Les restaurants et livreurs partenaires, pour exécuter votre commande.
- Les chauffeurs VTC, pour réaliser votre course.
- Des prestataires techniques : Google Firebase (authentification, base de données,
  notifications, hébergement) et des services cartographiques (fonds de carte).
Nous ne vendons jamais vos données personnelles.

4. SÉCURITÉ
Vos données sont stockées via l'infrastructure sécurisée de Google Firebase et protégées
par des règles d'accès. Les communications sont chiffrées (HTTPS).

5. CONSERVATION
Nous conservons vos données tant que votre compte est actif. Vous pouvez demander la
suppression de votre compte et de vos données à tout moment (voir contact).

6. VOS DROITS
Vous pouvez accéder à vos données, les corriger ou demander leur suppression en nous
contactant à l'adresse ci-dessous.

7. ENFANTS
L'Application n'est pas destinée aux enfants de moins de 13 ans.

8. MODIFICATIONS
Cette politique peut être mise à jour. La date en haut indique la dernière version.

9. CONTACT
Pour toute question relative à vos données : devchirdon@gmail.com
```

---

## ⚠️ À ne pas oublier dans Play Console (au-delà de ces 7 champs)

- **Section « Sécurité des données »** (Data Safety) — obligatoire. À déclarer, en cohérence
  avec la politique ci-dessus :
  - Collecte : nom, e-mail, téléphone, photo, **localisation précise**, historique d'achats,
    identifiants (jeton notif).
  - Chiffrement en transit : Oui. Possibilité de demander la suppression : Oui.
- **Autorisation de localisation en arrière-plan** : l'app utilise `ACCESS_FINE_LOCATION`
  au premier plan uniquement → bien le préciser (pas de localisation en arrière-plan).
- **Contenu de l'app** : classification du contenu (questionnaire), public cible, publicités
  (l'app n'affiche pas de pub → déclarer « Non »).
- **Captures d'écran** : min. 2 (téléphone), icône 512×512, image de bannière 1024×500.
```
