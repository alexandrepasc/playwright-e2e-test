# Playwright E2E Test Suite

End-to-end test suite for [playwright.dev](https://playwright.dev) built with [Playwright Test](https://playwright.dev/docs/test-intro) and TypeScript, organised using the Page Object Model (POM) pattern.

## Prerequisites

- [Node.js](https://nodejs.org) LTS (>= 20, required by Playwright 1.62)
- npm

## Installation

```bash
npm install
npx playwright install
```

`npx playwright install` downloads the browser binaries referenced in the project (Chromium, Firefox, WebKit).

## Running the tests

| Command | Description |
|---------|-------------|
| `npm test` | Run the full suite in all configured browsers |
| `npm run test:headed` | Run tests with a visible browser window |
| `npm run test:ui` | Open the interactive Playwright UI mode |
| `npm run test:report` | Open the last HTML test report |
| `npx playwright test tests/home.spec.ts` | Run a single spec file |

## Project structure

```
.
├── pages/                    # Page Object Model
│   ├── home/                 # Homepage page object
│   │   ├── home.ts           # Page class (URL, actions)
│   │   ├── homeElements.ts   # Centralised locators
│   │   └── index.ts          # Barrel export
│   └── docs/
│       └── intro/            # Docs/Intro page object (same layout)
├── tests/                    # Test specs
│   ├── example.spec.ts       # Playwright starter examples
│   └── home.spec.ts          # Homepage test suite
├── playwright.config.ts      # Playwright configuration
├── tsconfig.json             # TypeScript configuration
├── eslint.config.mjs         # ESLint flat config
└── playwright-dev-test-suite.md  # 66-case E2E test analysis/design doc (reference)
```

Each page in `pages/**` follows the convention of a page class (`*.ts`) that holds the URL and high-level actions, a sibling `*Elements.ts` file that centralises the locators, and an `index.ts` barrel export.

## Configuration

- **Target**: `https://playwright.dev` (set via `baseURL` in `playwright.config.ts`)
- **Browsers**: Chromium, Firefox, WebKit
- **Reporter**: HTML
- **Retries**: on CI only

## Code style

TypeScript files are linted via ESLint. Key style rules (tabs, single quotes, semicolons, camelCase, aligned object keys, explicit types) are enforced in `eslint.config.mjs` — see `AGENTS.md` for the conventions agents should follow.

```bash
npm run lint
npm run typecheck
```

## License

ISC
