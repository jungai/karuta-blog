import React from 'react'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
	return (
		<div className="grid place-content-center h-screen">
			<article>
				<h1 className="text-2xl text-tomato">{data.markdownRemark.frontmatter.title}</h1>
				<p className="font-semibold">{data.markdownRemark.frontmatter.author}</p>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</article>
		</div>
	)
}

export const pageQuery = graphql`
	query ($path: String!) {
		markdownRemark(frontmatter: { slug: { eq: $path } }) {
			html
			frontmatter {
				date
				author
				title
			}
		}
	}
`

export default Blog
