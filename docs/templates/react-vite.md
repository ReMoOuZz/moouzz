# React + Vite Template

A ready-to-ship React starter that pairs Vite's lightning-fast dev server with Bootstrap defaults.

## Overview
- Vite project structure with React 19 and JSX out of the box.
- Bootstrap CSS and JS bundles prewired for consistent styling and interactive components.
- Minimal global styles plus design tokens in `src/index.css` to guide customization.
- Cleanly separated component tree inside `src/App.jsx` showcasing common layout patterns.

## Directory Structure
```
templates/react-vite/
├── index.html            # Vite entry point mounting the React root
├── package.json          # Scripts and dependencies (React 19, Bootstrap, Vite)
├── vite.config.js        # Vite config enabling React fast refresh
└── src/
    ├── main.jsx          # React root bootstrap + Bootstrap imports
    ├── App.jsx           # Sample UI (navbar, cards, modal)
    └── index.css         # Design tokens and global overrides
```

## How It Works
1. `index.html` hosts a `<div id="root">`; Vite injects the bundle that `main.jsx` produces.
2. `main.jsx` imports Bootstrap CSS/JS alongside the app stylesheet, creates the React root, and renders `<App />` inside `React.StrictMode`.
3. `App.jsx` demonstrates a responsive layout with a navbar, call-to-action cards, and a modal wired to Bootstrap's JS bundle.
4. `index.css` defines CSS custom properties (`--container`) and opt-in `color-scheme` support that you can extend for theming.

## Local Preview
- Inside a generated project run `npm install` then `npm run dev` to start Vite on `http://localhost:5173` (default).
- Vite handles hot-module reloads; edits to JSX or CSS reflect instantly in the browser.
- Production builds use `npm run build`, with `npm run preview` providing a static server simulation.

## Extending the Template
- Replace the sample markup inside `App.jsx` with your own component tree.
- Move repeated UI pieces into separate components under `src/` as your app grows.
- Integrate a state manager or router (React Router, Zustand, Redux Toolkit) as needed.
- Adjust Bootstrap usage by customizing SCSS builds or swapping in utility-first frameworks.

Happy hacking!
