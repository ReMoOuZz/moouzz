# Vanilla Web Template

A batteries-included static web starter designed for rapid prototyping and micro-sites.

## Overview
- HTML partials, pages, and error views pre-wired for dynamic inclusion.
- CSS organized with cascade layers (`reset`, `components`, `pages`, `responsive`).
- JavaScript bootstrapped as ES modules with lazy page initializers and helper utilities.
- Bootstrap CDN references for quick styling, with room to swap for your preferred stack.

## Directory Structure
```
templates/vanilla-web/
├── css/
│   ├── components/          # Header, navbar, footer, and future UI pieces
│   ├── reset/               # Modern CSS reset imported via cascade layers
│   ├── responsive/          # Breakpoint documentation and overrides
│   └── style.css            # Entry file importing the layers
├── html/
│   ├── index.html           # Home page with data-driven includes
│   ├── partials/            # Header, footer, and shared fragments
│   ├── components/          # HTML snippets ready to reuse (card, modal, ...)
│   ├── pages/               # Additional routed pages (about, contact)
│   ├── templates/           # Scratch pad for future snippets
│   └── 404.html etc.        # Friendly error states
└── js/
    ├── main.js              # Entry module that boots page-specific logic
    ├── include-html.js      # Lightweight include system for partials
    ├── lib/                 # DOM + HTTP helpers
    ├── pages/               # Per-page `init()` modules (home, about, contact)
    └── components/          # Placeholder for shared widgets
```

## How It Works
1. Pages declare `data-include` attributes. `include-html.js` fetches the referenced partials and fires a `partials:ready` event when everything is loaded.
2. `main.js` runs as an ES module. It reads `data-page` from `<body>` and dynamically imports `js/pages/<page>.js`, calling `init()` if present so each page brings only the code it needs.
3. Shared behaviors (like the footer year) live in `main.js`, keeping markup clean and consistent.
4. The CSS entry point uses `@layer` ordering to keep resets stable while letting page-level overrides win when needed. Add new files by importing them into `style.css` under the appropriate cascade layer.

## Local Preview
- Serve the generated project with any static file server (VS Code Live Server, `npx serve`, `python -m http.server`, etc.).
- Because partials are fetched over HTTP, opening files directly via `file://` will not populate the includes.
- Customize Bootstrap usage by removing the CDN links and swapping in your build pipeline if required.

## Extending the Template
- Add an `init()` implementation inside `js/pages/home.js` (or sibling files) to bootstrap page-specific interactions.
- Populate the HTML component stubs with reusable sections for your design system.
- Expand the CSS cascade with additional layers or break the styles into thematic bundles as your project grows.

Happy scaffolding!
