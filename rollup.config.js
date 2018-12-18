//import babel from 'rollup-plugin-babel';

export default {
    entry: 'src/ux-checkbox.js',
    //plugins: [ babel() ],
    moduleName: 'uxCheckbox',
    globals: {
        Ractive: 'Ractive'
    },
    targets: [
        { dest: 'index.js', format: 'es' },
        { dest: 'index.umd.js', format: 'umd' },
        { dest: 'index.iife.js', format: 'iife' },
    ]
};
