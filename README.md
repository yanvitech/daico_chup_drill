# DAÏCO CHUP — Site Officiel

Site one-page pour l'artiste afrodrill **Daïco Chup** — univers katana × drill bénin.

## Stack

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS v4**
- **Hébergement** : Vercel (gratuit)

## 🚀 Déploiement sur Vercel (0€)

### 1. Prérequis
- Compte GitHub (gratuit)
- Compte Vercel (gratuit) → vercel.com
- Compte Formspree (gratuit) → formspree.io

### 2. Configurer Formspree (formulaires)

1. Va sur [formspree.io](https://formspree.io) → crée un compte
2. Crée **2 formulaires** :
   - "Newsletter Daïco Chup"
   - "Booking Daïco Chup"
3. Copie les IDs (ex: `xpznkyvw`)
4. Dans `src/app/page.tsx`, remplace **tous les** `YOUR_FORM_ID` par ton ID

### 3. Mettre à jour les IDs YouTube

Dans la section `Videos` de `src/app/page.tsx`, remplace les `id` placeholder par les vraies URLs YouTube :
```tsx
const videos = [
  { id: 'TON_VIDEO_ID_1', title: 'DORIMIN DRILL', label: 'Clip officiel' },
  { id: 'TON_VIDEO_ID_2', title: 'Djandjou 2K6', label: 'Clip officiel' },
];
```

> L'ID YouTube se trouve dans l'URL : `youtube.com/watch?v=**TON_ID**`

### 4. Mettre à jour les liens réseaux

Dans le tableau `links` de la section `Reseaux`, corrige tes handles exacts :
- Instagram : `https://www.instagram.com/TON_HANDLE`
- TikTok : `https://www.tiktok.com/@TON_HANDLE`
- YouTube : `https://www.youtube.com/@TON_CHANNEL`
- Audiomack : `https://audiomack.com/TON_PROFIL`

### 5. Déployer sur Vercel

```bash
# Option A : Via CLI (recommandé)
npm i -g vercel
vercel

# Option B : Via GitHub
# 1. Push ce repo sur GitHub
# 2. Va sur vercel.com → "New Project"
# 3. Importe le repo GitHub
# 4. Clique "Deploy" → c'est tout
```

### 6. Domaine personnalisé (optionnel)

Sur Vercel : Settings → Domains → Ajouter `daicochup.com`

---

## 📧 Newsletter alternative : EmailOctopus

Si tu veux une vraie liste email gratuite jusqu'à 2500 abonnés :

1. Crée un compte sur [emailoctopus.com](https://emailoctopus.com)
2. Crée une liste "Clan MIRI"
3. Dans le formulaire d'inscription, utilise leur API ou remplace l'endpoint Formspree

---

## 📁 Structure du projet

```
src/
├── app/
│   ├── globals.css     # Thème japonais + palette
│   ├── layout.tsx      # SEO metadata + fonts
│   └── page.tsx        # Tout le site (one-page)
```

---

## 🎨 Palette

| Nom | Hex |
|-----|-----|
| Noir profond | `#080808` |
| Rouge sang | `#8B0000` |
| Or mat | `#C9A84C` |
| Or clair | `#E8D080` |
| Blanc cassé | `#F0EDE8` |

---

## SEO ciblé

Le site est optimisé pour :
- `Daïco Chup`
- `afrodrill Bénin`
- `drill Bénin`
- `DORIMIN DRILL`
- `Djandjou 2K6`

---

*MIRI ne dort jamais.*
