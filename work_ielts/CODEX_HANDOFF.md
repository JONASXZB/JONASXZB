# Codex handoff notes

This repository is a GitHub/Codex-ready cleanup of the IELTS Navigator Pro project.

## What was preserved

- IELTS Navigator home page
- Listening, Reading, Writing, Speaking resource navigation
- Think tank / newspaper / media resources
- Weekly News page
- React + TypeScript + Vite front end
- Express + tRPC back end
- Drizzle schema and existing SQL migration
- Existing UI component system

## What was removed or neutralized

- Platform-specific runtime plugin
- Platform-specific browser debug collector
- Platform-specific public debug assets
- Platform-specific OAuth server integration
- Platform-specific storage proxy
- Platform-specific internal API helpers for maps, data, audio, and image services

## What was changed to OpenAI-compatible

- Server AI helper now uses `OPENAI_API_KEY`, `OPENAI_BASE_URL`, and `OPENAI_CHAT_MODEL`.
- A basic tRPC endpoint is available at `ai.chat`.
- Image helper uses OpenAI-compatible image generation and returns a data URL or hosted URL.

## Recommended first Codex task

Please inspect this repository and make the project production-ready:

1. Run dependency installation.
2. Run type checking and build.
3. Fix any TypeScript or dependency errors.
4. Keep the existing IELTS and Weekly News functionality.
5. Refactor large data objects out of `Home.tsx` into `client/src/data/resources.ts`.
6. Add a Writing practice route with localStorage drafts, word count, timer, and placeholder AI feedback panel.
7. Do not add paid API calls to the UI until `.env` is configured.
