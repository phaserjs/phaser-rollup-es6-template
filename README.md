# Phaser 4 + Rollup + ES6 Template

This repo contains a bare-bones example of how to create a game using Phaser 4, ES6 and Rollup.

## Getting started

On GitHub, click the 'Use this template' button above the file list. This will clone the template for you under your own GitHub account. For more details see [this help file](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

Once created, clone the repo locally and install its dependencies.

Note that if you have cloned this template repo via GitHub, then you'll need to change the URLs below to match _your_ repos name:

```bash
git clone https://github.com/phaserjs/phaser-rollup-es6-template
cd phaser-rollup-es6-template
npm install

# or
npx degit "phaserjs/phaser-rollup-es6-template" my-game
cd my-game
npm install
```

The `public/index.html` file contains a `<script src='bundle.js'>` tag, which means we need to create `public/bundle.js`. The `rollup.config.js` file tells Rollup how to create this bundle, starting with `src/main.js` and including all its dependencies.

`npm run build` builds the application to `public/bundle.js`, along with a sourcemap file for debugging.

`npm start` launches a server, using [serve](https://github.com/zeit/serve). Navigate to [localhost:5000](http://localhost:5000). The URL may change, depending on your system, but is copied to your clipboard when the server starts.

`npm run watch` will continually rebuild the application as your source files change.

`npm run dev` will run `npm start` and `npm run watch` in parallel.

If you wish to use TypeScript instead of ES6, please see [our TypeScript template](https://github.com/phaserjs/phaser-rollup-typescript-template) instead.

## License

[MIT](LICENSE).
