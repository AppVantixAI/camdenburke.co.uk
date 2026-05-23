# Camden Burke — Security Resume

Interactive resume site built with Next.js, Three.js, and Tailwind CSS.

**Live site:** [https://camdenburke.co.uk](https://camdenburke.co.uk)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy (Vercel)

This project is configured for [Vercel](https://vercel.com). Pushes to `main` trigger automatic deployments when the repo is connected.

### Custom domain: camdenburke.co.uk

At your domain registrar, add these DNS records (values from your Vercel project → Settings → Domains):

| Type  | Name | Value                    |
| ----- | ---- | ------------------------ |
| `A`   | `@`  | `76.76.21.21`            |
| `CNAME` | `www` | `cname.vercel-dns.com` |

Vercel will provision HTTPS automatically once DNS propagates (usually minutes, up to 48 hours).

## Project structure

- `data/resume.js` — resume content (edit here to update copy)
- `public/resume.pdf` — downloadable PDF
- `components/` — UI, 3D hero, terminal effects
- `pages/index.js` — main page
