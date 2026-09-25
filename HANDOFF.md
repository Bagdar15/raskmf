# RASK MF — Project Handoff

**Snapshot date:** 2026-09-25  
**Review after:** 2026-12-31

This document is a short orientation snapshot, not a permanent specification. Before acting on it, check the latest user request, repository state, deployment dashboard, and current code. If they disagree with this file, the newer evidence wins.

## Project

RASK is a Medicinska Föreningen initiative concerning recruitment of students for clinical trials. This site is currently a small, Swedish-language reference page for support letters from partner organisations. It is intended to support funding/application material rather than operate the future full RASK service.

The production domain is `raskmf.se`, deployed through Netlify from this repository.

## Current state

- React + Vite application using React Router and Tailwind's Vite integration.
- The main page contains a branded hero, a support-letter grid, and a footer linking to Medicinska Föreningen.
- Visitors currently see a styled “Under construction...” password gate before the main page.
- The gate is client-side and session-scoped. It prevents casual access and URL bypasses, but it is **not secure authentication**; bundled code and direct assets may still be discoverable.
- All listed organisations currently use `src/pdfs/sample.pdf`. Replace these with approved final documents when supplied.
- Support-letter entries are maintained in `src/data/supportLetters.js`.
- Social sharing artwork, favicon, and Apple touch icon live in `public/`.

## Determining what to do next

There is intentionally no speculative roadmap here. Use, in order:

1. The latest instructions from the project owner/user.
2. `git status`, recent commits, and open GitHub work.
3. `src/data/supportLetters.js` for document/logo placeholders.
4. Netlify's deploy and domain status when the issue concerns production.

Do not treat this snapshot as authority for design details that may have changed. Inspect the current UI at desktop, tablet, and mobile widths before modifying it.

## Local setup

Requirements: a current Node.js installation and pnpm.

```bash
pnpm install
pnpm dev
```

The development server is configured for `http://localhost:8888` and binds to the local network.

Before handing off changes:

```bash
pnpm build
```

`pnpm lint` is not currently a reliable check because the installed ESLint version expects an `eslint.config.*` file that the repository does not yet contain. Do not silently claim lint passed; either add a proper configuration as a separate intentional change or report this limitation.

## Useful files

- `src/App.jsx` — access gate and routing
- `src/components/ConstructionPage.jsx` — temporary entry screen
- `src/pages/HomePage.jsx` — main page composition
- `src/components/HeroMosaic.jsx` — geometric artwork data
- `src/data/supportLetters.js` — organisations, logos, and PDFs
- `src/index.css` — visual system and responsive layout
- `index.html` — metadata and social preview tags

## Relevant Codex skills

Use these only when available and applicable, and read their current instructions before use:

- `impeccable` for UI design, responsive refinement, accessibility, and typography work.
- `browser:control-in-app-browser` for interactive and responsive browser verification.
- `pdf:pdf` when inspecting or validating final support-letter PDFs.

## Guardrails

- Preserve the restrained red/off-white visual language unless the owner requests a redesign.
- Keep support letters data-driven rather than duplicating card markup.
- Never present the current client-side password gate as protection for confidential material. Use server-side authentication or Netlify access controls if genuine privacy becomes necessary.
- Avoid committing generated `dist/` output or unrelated local files.
- Verify production separately after pushing; a successful local build does not guarantee a successful Netlify deploy.
