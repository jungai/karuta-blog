const path = require(`path`)

// use node to create dynamic page
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const rawResult = await graphql(`
		{
			allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/" } }) {
				edges {
					node {
						frontmatter {
							title
							author
							date
							slug
						}
						html
					}
				}
			}
		}
	`)

	const content = rawResult.data.allMarkdownRemark.edges

	content.forEach(({ node }) => {
		createPage({
			path: `/karuta/${node.frontmatter.slug}`,
			component: path.resolve('./src/templates/blog.jsx'),
		})
	})
}
