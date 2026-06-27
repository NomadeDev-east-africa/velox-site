# 🚀 Déploiement — Hostinger VPS (Node.js)

Site **Velox** — Livraison de repas & VTC à Djibouti (Next.js 15, App Router).
Mode retenu : **VPS Node.js** → on garde `next start`.

> ⚠️ Ne PAS utiliser `output: "export"`. La config actuelle (`next.config.ts`) est déjà la bonne pour un VPS.
> Les images sont servies depuis `/public` (`images.unoptimized: true`) pour rester fiables sur Hostinger.

---

## 0. Pré-requis sur le VPS

- Node.js 20 LTS (ou ≥ 18.18)
- npm
- PM2 (gestionnaire de process) : `npm install -g pm2`
- Nginx (reverse proxy + HTTPS)

```bash
# Version Node
node -v        # doit afficher v20.x (ou ≥ 18.18)
```

---

## 1. Envoyer le projet sur le VPS

**Ne pas** envoyer `node_modules/` ni `.next/`. Transférer le code source (Git de préférence).

```bash
# Sur le VPS, dans /var/www par exemple
cd /var/www
git clone https://github.com/NomadeDev-east-africa/velox-site.git velox
cd velox
```

---

## 2. Installer + builder

```bash
npm ci                  # installe à partir du package-lock (reproductible)
npm run build           # génère .next/ (build de production)
```

---

## 3. Lancer avec PM2

`next start` écoute par défaut sur le port **3000**.

```bash
pm2 start npm --name velox -- start
pm2 save                # sauvegarde la liste des process
pm2 startup             # génère la commande pour redémarrer au boot (à coller)
```

Commandes utiles :
```bash
pm2 logs velox          # voir les logs
pm2 restart velox
pm2 status
```

---

## 4. Reverse proxy Nginx + HTTPS

Fichier `/etc/nginx/sites-available/velox` :

```nginx
server {
    listen 80;
    server_name VOTRE-DOMAINE.com www.VOTRE-DOMAINE.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/velox /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# HTTPS gratuit Let's Encrypt
apt install certbot python3-certbot-nginx -y
certbot --nginx -d VOTRE-DOMAINE.com -d www.VOTRE-DOMAINE.com
```

---

## 5. Mettre à jour le site plus tard

```bash
cd /var/www/velox
git pull                # récupère les dernières modifs
npm ci
npm run build
pm2 restart velox
```

---

## ✅ Checklist avant mise en ligne

- [ ] Domaine pointé sur l'IP du VPS (enregistrement A)
- [ ] `npm run build` passe sans erreur
- [ ] PM2 lance le site et `pm2 startup` est configuré (survit au reboot)
- [ ] Nginx + certificat HTTPS actifs
- [ ] **SEO** : `metadataBase` + image OpenGraph renseignés (`app/layout.tsx`)
- [ ] **Liens Google Play** mis à jour (boutons « Télécharger » dans `Hero.tsx` et `Download.tsx`, actuellement `#`)
- [ ] **URL politique de confidentialité** (`https://VOTRE-DOMAINE.com/confidentialite`) renseignée dans la Play Console
```
