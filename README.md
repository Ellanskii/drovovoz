# Drovovoz Monorepo

Monorepo with two workspaces:

- apps/frontend — Nuxt 4 app (@drovovoz/frontend)
- apps/backend — Strapi v5 app (@drovovoz/backend)

## Requirements
- Node.js >= 18.20
- npm >= 9

## Install
```bash
npm i -ws
```

## Development
- Backend only:
```bash
npm run dev:be
```
- Frontend only:
```bash
npm run dev:fe
```
- Both concurrently:
```bash
npm run dev
```

## Build & Start
```bash
npm run build
npm run start
```

## Notes
- Workspaces are under `apps/*`.
- Strapi quickstart uses SQLite (stored in `apps/backend/.tmp/data.db`).
