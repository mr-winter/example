module.exports = {
	title: 'React Style Guide Example',
	defaultExample: true,
    sections: [
        {
            name: 'Documentation',
            content: './src/Readme.md'
        },
        {
            name: 'Components',
            components: './src/components/**/[A-Z]*.js'
        }
    ],
	webpackConfig: {
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					loader: 'style-loader!css-loader?modules&importLoaders=1',
				},
			],
		},
	},
};
