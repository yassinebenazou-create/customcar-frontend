# Livraison demo CUSTOMCAR

Cette version est une demo frontend du site CUSTOMCAR.

## Contenu inclus

- Page d'accueil
- Services
- Details des services
- Portfolio
- Contact
- Rendez-vous
- Design responsive desktop / mobile

## Option recommandee si Netlify affiche une page blanche

Utilisez Cloudflare Pages en upload direct :

1. Allez sur https://pages.cloudflare.com/
2. Creez un projet avec "Upload assets".
3. Uploadez le fichier `customcar-cloudflare-pages.zip` ou le dossier `dist`.
4. Cloudflare vous donne un lien public a envoyer au client.

Autre option professionnelle : Vercel.

1. Mettez le projet sur GitHub.
2. Dans Vercel, importez le repo.
3. Framework: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Important

Le dossier `dist` contient la version production du site.

Pour montrer le site au client, vous pouvez :

1. Mettre le dossier `dist` en ligne sur Cloudflare Pages, Vercel, Hostinger ou cPanel.
2. Envoyer le fichier ZIP de demo a un developpeur ou a l'hebergeur.
3. Lancer localement avec `npm run preview` apres `npm run build`.

## Notes

- Les pages publiques fonctionnent comme demo visuelle.
- Le formulaire, l'administration et les donnees dynamiques auront besoin du backend/API pour fonctionner en production.
- Le bouton admin affiche `Connexion` pour les visiteurs et `Espace admin` uniquement apres connexion admin.

## Commandes utiles

```bash
npm install
npm run build
npm run preview
```
