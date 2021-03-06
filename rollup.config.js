import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/CETEI.js',
  format: 'iife',
  dest: 'dist/CETEI.js',
  sourceMap: false,
  moduleName: 'CETEI',
  plugins: [babel({exclude: 'node_modules/**', "presets": ["es2015-rollup"]})]
}
