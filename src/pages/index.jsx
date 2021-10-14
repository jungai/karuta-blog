import React from 'react'
import { Link } from 'gatsby'
import Navbar from '../component/Navbar'

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div className="min-h-screen">
				<div className="h-96 bg-[tomato] bg-gradient-to-t from-green-500 px-20 py-2">
					<h1 className="text-2xl ">Karuta Blog</h1>
					<Link to="/posts/command">commands</Link>
				</div>
				<div className="h-96 bg-green-500 bg-gradient-to-t from-white px-20 py-2"></div>
			</div>
		</>
	)
}

export default IndexPage
