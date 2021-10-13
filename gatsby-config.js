module.exports = {
	siteMetadata: {
		siteUrl: 'https://www.yourdomain.tld',
		title: 'karuta-blog',
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		// TODO: add later
		// {
		// 	resolve: 'gatsby-plugin-google-analytics',
		// 	options: {
		// 		trackingId: '',
		// 	},
		// },
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-remark',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		// TODO: not have images yet
		// {
		// 	resolve: 'gatsby-source-filesystem',
		// 	options: {
		// 		name: 'images',
		// 		path: './src/images/',
		// 	},
		// 	__key: 'images',
		// },
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.md`, `.mdx`],
			},
		},
	],
};
