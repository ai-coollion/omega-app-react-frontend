# Omega Frontend

A React + TypeScript frontend for the Omega project. This repository contains the UI, components, pages, and build configuration (webpack, TypeScript, ESLint) used to develop and ship the web application.

## Key features

- Written in React + TypeScript
- Uses webpack for bundling and webpack-dev-server for local development
- UI components under `src/components`
- Uses MUI, react-query, Redux Toolkit, wagmi/ethers for web3 integration
- ESLint + Prettier configured for consistent code style

## Tech stack

- React 19
- TypeScript
- Webpack 5
- MUI (Material UI)
- Redux Toolkit, react-query
- wagmi, ethers, connectkit for wallet integration

## Prerequisites

- Node.js (recommended v16 or newer)
- npm (or yarn/pnpm) — this repo uses the standard npm scripts defined in `package.json`

## Quick start (development)

1. Clone the repo and change into the frontend folder

2. Install dependencies

```powershell
npm install
```

3. Start the dev server (opens the app in your browser)

```powershell
npm run dev
```

Notes:
- `dev` runs `webpack serve --mode development --open` (webpack-dev-server)
- Environment variables can be provided via a `.env` file — this project uses `dotenv-webpack` to load env variables. If you have a `.env.example`, copy it to `.env` and update values.

## Available scripts

The scripts defined in `package.json` (use `npm run <script>`):

- `dev` — run webpack dev server (development + HMR)
- `start` — serve a production `build` directory (`serve -s build`). Note: run a production build first.
- `build:analyze` — production build with bundle analyzer (sets `ANALYZE_BUNDLE=true NODE_ENV=production webpack build`)
- `lint` — run ESLint and auto-fix where possible (`eslint src --fix`)
- `format:fix` — format source files with Prettier (`prettier --write "src/**/*.{ts,tsx}"`)
- `format:check` — check formatting with Prettier

If you need a plain production build command, you can run:

```powershell
npx webpack --mode production
```

or add a `build` script to `package.json` like:

```json
"build": "webpack --mode production"
```

## Build & serve production

1. Create a production build:

```powershell
npx webpack --mode production
```

2. Serve the build folder locally (already provided by the `start` script):

```powershell
npm start
```

## Formatting & linting

Run ESLint autofix across `src`:

```powershell
npm run lint
```

Format code with Prettier:

```powershell
npm run format:fix
```

## Project structure (high-level)

- `src/` — application source
	- `components/` — reusable components
	- `pages/` — route pages
	- `lib/`, `hooks/`, `services/`, `store/` — utilities, data, state
- `public/` — static assets and `index.html`

## Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Run lint and format before committing
3. Open a PR with a clear description of changes

## Troubleshooting

- If you encounter issues with missing env variables, ensure a `.env` file exists at the project root or set environment variables in your shell.
- If the `start` command doesn't serve a build, ensure a build directory exists (run the production build step first).

## License & contact

Include your license here (e.g., MIT) and a contact link or team email for further questions.

---

If you want, I can also:

- add a `build` script to `package.json` and run a test build
- add a short `CONTRIBUTING.md` or `.env.example`
- add a minimal CI workflow to build the app on push

Tell me which (if any) of the above you'd like next.
