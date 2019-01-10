const resolve = require('rollup-plugin-node-resolve');
module.exports = {
	input: 'src/src-index.js',
	output: {
		file: 'build/app.rollup.src.js',
		format: 'esm'
	},
	plugins:[
		resolve()
	],
	external: ['jquery', 'underscore', 'backbone', 'backbone.radio']
};
