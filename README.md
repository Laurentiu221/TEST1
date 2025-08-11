# Prop Firms Promotions Next.js Site

Acest proiect este un exemplu de site dinamic realizat cu Next.js care afișează promoțiile unor prop firms. Datele sunt preluate din Contentful (un CMS headless).

## Configurare

1. Copiază fișierul `.env.local.example` în `.env.local` și completează valorile pentru:
   - `CONTENTFUL_SPACE_ID`
   - `CONTENTFUL_ACCESS_TOKEN`
2. Instalează dependențele:
   ```bash
   npm install
   ```
3. Rulează în dezvoltare:
   ```bash
   npm run dev
   ```

## Testare

Scriptul de testare folosește Jest:
```
npm test
```

În lipsa dependențelor instalate, comenzile de mai sus vor eșua; asigură-te că ai acces la internet și permisiunea de a descărca pachetele necesare.
