# example-qwik

A server-side counter app built with [Qwik City](https://qwik.dev/docs/qwikcity/), ready to deploy on [Trapiche](https://trapiche.cloud).

## Deploy on Trapiche

1. Push this repo to your GitHub account
2. Go to [trapiche.cloud](https://trapiche.cloud) and create a new deployment
3. Select this repository — Trapiche detects Qwik City automatically
4. Done. Runs in a Docker container managed by Trapiche.

## Detection

Trapiche detects this as a **Qwik City** app via `"@qwik.dev/city"` in `package.json`.
- Deploy mode: **SSR / Docker**
- Build command: `npm run build`
- Start command: `npm start` → `node server/entry.express.js`

## Local development

```bash
npm install
npm run dev
# open http://localhost:5173
```
