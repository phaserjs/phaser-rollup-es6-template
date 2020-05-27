import filesize from 'rollup-plugin-filesize';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {

    input: './src/main.js',

    output: [
        {
            file: 'public/bundle.js',
            format: 'iife', // immediately-invoked function expression — suitable for <script> tags
            name: 'Phaser4Game',
            sourcemap: true
        }
    ],

    plugins: [

        image({
            //  If true, instructs the plugin to generate an ES Module which exports a DOM Image
            //  If false, plugin generates base64 data
            dom: false
        }),

        resolve(),

        filesize(),

        // minify, but only in production, not in watch mode
        production && terser()

    ]

};