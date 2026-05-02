# IELTS Navigator Pro

IELTS Navigator Pro is a React + TypeScript IELTS learning resource website with an Express/tRPC backend. It includes IELTS module navigation, curated resources, a Weekly News page, and an OpenAI-compatible server helper for future AI feedback features.

## Tech stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- shadcn/Radix-style UI components
- Wouter routing
- Express
- tRPC
- Drizzle ORM
- MySQL-compatible schema

## Quick start

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Then open:

```text
http://localhost:3000
```

If you prefer npm, you can use:

```bash
npm install
npm run dev
```

## Environment variables

AI features require:

```bash
OPENAI_API_KEY=sk-your-key-here
```

Optional:

```bash
OPENAI_BASE_URL=https://api.openai.com/v1
OPENAI_CHAT_MODEL=gpt-4.1-mini
DATABASE_URL=
JWT_SECRET=change-this-in-production
PORT=3000
```

The current public pages can run without a database or OpenAI key. AI calls will fail safely until `OPENAI_API_KEY` is configured.

## Useful commands

```bash
pnpm dev      # local development
pnpm build    # production build
pnpm start    # run production server after build
pnpm check    # TypeScript check
pnpm format   # format code
```

## Project structure

```text
client/       React front end
server/       Express + tRPC back end
shared/       Shared constants and types
drizzle/     Database schema and migration files
```

## Codex handoff

See `CODEX_HANDOFF.md` for the recommended first prompt and cleanup notes.
