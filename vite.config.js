const path = require('path');
const { defineConfig } = require('vite');
import dts from 'vite-plugin-dts';
import removeConsole from 'vite-plugin-remove-console';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

module.exports = defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/plugin.ts'),
      name: 'ClipCode',
      fileName: (format) => `railroad.${format}.js`,
    },
  },
  plugins: [
    dts(),
    removeConsole(),
    cssInjectedByJsPlugin(), // bundle CSS into js file
  ],
});
