const path = require('path');

module.exports = {
	mode:'development',
	externals:{
		'jquery': '$',
		'underscore': '_',
		'backbone': 'Backbone',
		'backbone.radio': 'Radio'
	},
	entry: {
		app: './src/index.js'
	},
	output: {
		path: path.resolve('./build'),
		filename: 'app.webpack.js'
	},
}
