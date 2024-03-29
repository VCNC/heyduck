import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import css from 'rollup-plugin-css-only';

export default {
  input: './theme/fun.js',
  output: {
    file: './theme/test.js',
    format: 'es',
    assetFileNames: 'css/test.css',
  },
  plugins: [nodeResolve(), commonjs(), css()],
};
