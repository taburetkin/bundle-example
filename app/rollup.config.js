const resolve = require('rollup-plugin-node-resolve');
module.exports = {
	input: 'src/index.js',
	output: {
		file: 'build/app.rollup.js',
		format: 'esm'
	},
	plugins:[
		resolve()
	],
	external: ['jquery', 'underscore', 'backbone', 'backbone.radio']
};
