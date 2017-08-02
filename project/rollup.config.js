import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  dest: './index.cjs.js',
  entry: './index.js',
  format: 'cjs',
  plugins: [
    resolve({
      jsnext: true,
      preferBuiltins: true
    }),
    commonjs()
  ]
};

