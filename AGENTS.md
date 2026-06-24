<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project-specific

## Stack
- **Next.js 16.2** (App Router) + **React 19.2** + **TypeScript 5** + **Tailwind CSS v4**
- ESLint v9 flat config (`eslint.config.mjs`) — no `.eslintrc`
- `@/*` import alias maps to project root

## ⚠️ Key Next.js 16 quirks (training data is wrong)
- `params` / `searchParams` are **async** — always `await props.params`
- No `middleware` — use `proxy.ts` with `export function proxy(request)` instead
- `revalidateTag(tag, profile)` — requires a second `cacheLife` profile argument
- `cacheLife` / `cacheTag` imported directly from `next/cache` (no `unstable_` prefix)
- `updateTag` is the read-your-writes alternative to `revalidateTag`
- Turbopack is default — no `--turbopack` flag needed (opt out with `--webpack`)
- `next lint` removed — use `npx eslint` directly
- `next/image` `minimumCacheTTL` defaults to 4h
- Parallel route slots require explicit `default.js`
- SCSS `~` tilde imports not supported (use bare path)

## Commands
```bash
npm run dev       # next dev
npm run build     # next build
npm run start     # next start
npm run lint      # npx eslint
```

## Tests
None configured. No test framework or test files exist.

## Notes
- `.env*` files are gitignored; opt in per-file if needed
- `.next/` (build output) and `.next/dev` (dev output) are separate directories
- No CI, no deployment config, no opencode.json
