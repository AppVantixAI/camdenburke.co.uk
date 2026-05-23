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

Your domain uses **Cloudflare** nameservers. In the Cloudflare dashboard → **DNS** → **Records**, add:

| Type    | Name | Content              | Proxy status |
| ------- | ---- | -------------------- | ------------ |
| `A`     | `@`  | `76.76.21.21`        | DNS only (grey cloud) |
| `CNAME` | `www`| `cname.vercel-dns.com` | DNS only (grey cloud) |

Turn off Cloudflare proxy (grey cloud) for these records so Vercel can verify and issue SSL.

Vercel project: [camdenburke-co-uk](https://vercel.com/app-vantix/camdenburke-co-uk)  
GitHub repo: [AppVantixAI/camdenburke.co.uk](https://github.com/AppVantixAI/camdenburke.co.uk)

Pushes to `master` auto-deploy via Vercel Git integration.

## Project structure

- `data/resume.js` — resume content (edit here to update copy)
- `public/resume.pdf` — downloadable PDF
- `components/` — UI, 3D hero, terminal effects
- `pages/index.js` — main page
