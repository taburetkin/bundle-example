const resolve = require('rollup-plugin-node-resolve');
module.exports = {
	input: 'src/lib-index.js',
	output: {
		file: 'build/app.rollup.lib.js',
		format: 'esm'
	},
	plugins:[
		resolve()
	],
	external: ['jquery', 'underscore', 'backbone', 'backbone.radio']
};
