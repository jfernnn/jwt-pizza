import { test, expect } from 'playwright-test-coverage';

test('home page', async ({ page }) => {
  await page.goto('/');

  expect(await page.title()).toBe('JWT Pizza');
});
/*
test('login', async ({ page }) => {

});

{
  "name": "jwt-pizza",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {
    "ansi-regex": "^6.0.1",
    "ansi-styles": "^6.2.1",
    "any-promise": "^1.3.0",
    "anymatch": "^3.1.3",
    "arg": "^5.0.2",
    "autoprefixer": "^10.4.19",
    "balanced-match": "^1.0.2",
    "binary-extensions": "^2.3.0",
    "brace-expansion": "^2.0.1",
    "braces": "^3.0.2",
    "browserslist": "^4.23.0",
    "camelcase-css": "^2.0.1",
    "caniuse-lite": "^1.0.30001609",
    "chokidar": "^3.6.0",
    "color-convert": "^2.0.1",
    "color-name": "^1.1.4",
    "commander": "^4.1.1",
    "cross-spawn": "^7.0.3",
    "cssesc": "^3.0.0",
    "didyoumean": "^1.2.2",
    "dlv": "^1.1.3",
    "eastasianwidth": "^0.2.0",
    "electron-to-chromium": "^1.4.735",
    "emoji-regex": "^9.2.2",
    "esbuild": "^0.20.2",
    "escalade": "^3.1.2",
    "fast-glob": "^3.3.2",
    "fastq": "^1.17.1",
    "fill-range": "^7.0.1",
    "foreground-child": "^3.1.1",
    "fraction.js": "^4.3.7",
    "fsevents": "^2.3.3",
    "function-bind": "^1.1.2",
    "glob": "^10.3.12",
    "glob-parent": "^6.0.2",
    "hasown": "^2.0.2",
    "is-binary-path": "^2.1.0",
    "is-core-module": "^2.13.1",
    "is-extglob": "^2.1.1",
    "is-fullwidth-code-point": "^3.0.0",
    "is-glob": "^4.0.3",
    "is-number": "^7.0.0",
    "isexe": "^2.0.0",
    "jackspeak": "^2.3.6",
    "jiti": "^1.21.0",
    "js-tokens": "^4.0.0",
    "lilconfig": "^2.1.0",
    "lines-and-columns": "^1.2.4",
    "loose-envify": "^1.4.0",
    "lru-cache": "^10.2.0",
    "merge2": "^1.4.1",
    "micromatch": "^4.0.5",
    "minimatch": "^9.0.4",
    "minipass": "^7.0.4",
    "mz": "^2.7.0",
    "nanoid": "^3.3.7",
    "node-releases": "^2.0.14",
    "normalize-path": "^3.0.0",
    "normalize-range": "^0.1.2",
    "object-assign": "^4.1.1",
    "object-hash": "^3.0.0",
    "path-key": "^3.1.1",
    "path-parse": "^1.0.7",
    "path-scurry": "^1.10.2",
    "picocolors": "^1.0.0",
    "picomatch": "^2.3.1",
    "pify": "^2.3.0",
    "pirates": "^4.0.6",
    "postcss": "^8.4.38",
    "postcss-import": "^15.1.0",
    "postcss-js": "^4.0.1",
    "postcss-load-config": "^4.0.2",
    "postcss-nested": "^6.0.1",
    "postcss-selector-parser": "^6.0.16",
    "postcss-value-parser": "^4.2.0",
    "preline": "^2.1.0",
    "queue-microtask": "^1.2.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router": "^6.22.3",
    "react-router-dom": "^6.22.3",
    "read-cache": "^1.0.0",
    "readdirp": "^3.6.0",
    "resolve": "^1.22.8",
    "reusify": "^1.0.4",
    "rollup": "^4.14.1",
    "run-parallel": "^1.2.0",
    "scheduler": "^0.23.0",
    "shebang-command": "^2.0.0",
    "shebang-regex": "^3.0.0",
    "signal-exit": "^4.1.0",
    "source-map-js": "^1.2.0",
    "string-width": "^5.1.2",
    "string-width-cjs": "^4.2.3",
    "strip-ansi": "^7.1.0",
    "strip-ansi-cjs": "^6.0.1",
    "sucrase": "^3.35.0",
    "supports-preserve-symlinks-flag": "^1.0.0",
    "tailwindcss": "^3.4.3",
    "thenify": "^3.3.1",
    "thenify-all": "^1.6.0",
    "to-regex-range": "^5.0.1",
    "ts-interface-checker": "^0.1.13",
    "update-browserslist-db": "^1.0.13",
    "util-deprecate": "^1.0.2",
    "vite": "^5.2.8",
    "which": "^2.0.2",
    "wrap-ansi": "^8.1.0",
    "wrap-ansi-cjs": "^7.0.0",
    "yaml": "^2.4.1"
  },
  "devDependencies": {
    "@playwright/test": "^1.47.2",
    "@types/node": "^22.7.4",
    "nyc": "^17.1.0",
    "playwright-test-coverage": "^1.2.12",
    "vite-plugin-istanbul": "^6.0.2"
  },
  "scripts": {
    "dev": "vite",
    "test": "playwright test",
    "test:coverage": "nyc --reporter=json-summary --reporter=text playwright test"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

*/






/*
{
  "name": "pizzashop",
  "version": "1.0.0",
  "description": "The world's first JWT Pizza",
  "main": "index.js",
  "license": "ISC",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "playwright test",
    "test:coverage": "nyc --reporter=json-summary --reporter=text playwright test"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.19",
    "nyc": "^17.1.0",
    "playwright-test-coverage": "^1.2.12",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.8",
    "vite-plugin-istanbul": "^6.0.2"
  },
  "dependencies": {
    "preline": "^2.1.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.3"
  }
}
*/