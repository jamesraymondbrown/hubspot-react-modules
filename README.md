# HubSpot React Modules

This repository contains custom React-based modules built for use within the HubSpot CMS. It's structured to support modular development, local previews, and smooth deployment to HubSpot portals.

## 📁 Project Structure

```
cfib-modules-project/
├── hsproject.json               # HubSpot project config (used by hs project upload)
├── cfib-hubspot-modules/       # Contains all local development files
│   ├── cms-assets.json          # Dev server config for local preview
│   ├── package.json             # Dependencies and scripts for React/Vite
│   ├── .gitignore               # Ignores secrets, node_modules, and build output
│   ├── hubspot.config.yml       # Local HubSpot auth (excluded from Git)
│   └── src/
│       └── components/
│           └── modules/
│               ├── SavingsCalculator/
│               │   ├── index.jsx
│               │   ├── SavingsCalculatorIsland.jsx
│               │   └── styles.css
```

## 🛠 Getting Started

### Initialize the HubSpot project (once)

From the root directory:

```bash
hs project init


### Install dependencies

```bash
cd cfib-hubspot-modules
npm install
```

### Run local dev server, from within /cfib-hubspot-modules

```bash
npm run start
```

This will run the HubSpot CMS dev server locally with module previews at `http://localhost:3000`.

### Deploy to HubSpot

From the **project root**:

```bash
hs project upload
```

This will upload the contents of `src/` to the connected HubSpot portal based on your `hsproject.json`.

> 🔐 Your `hubspot.config.yml` file contains authentication details and is excluded from Git.

---

## 📄 License

Private / internal use. Not licensed for public redistribution.
