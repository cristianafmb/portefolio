module.exports = {
	siteMetadata: {
		title: `Portefolio`,
		siteUrl: `https://www.yourdomain.tld`
	},
	plugins: [
		`gatsby-plugin-sass`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `./src/images/`
			},
			__key: `images`
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`
			}
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`,
				languages: [ `es`, `en`, `pt` ],
				defaultLanguage: `pt`,
				generateDefaultLanguagePage: true,
				siteUrl: `https://cristiana.gatsbyio/`,
				i18nextOptions: {
					interpolation: {
						escapeValue: false // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false
				}
			}
		},
		`gatsby-transformer-json`,
		`gatsby-plugin-gatsby-cloud`
	]
};
