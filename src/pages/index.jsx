import React from 'react'
import Navbar from '../component/Navbar'

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div>
				<div className="h-96 bg-tomato bg-gradient-to-t from-green-500 px-20 py-2">
					<h1 className="text-9xl text-green-500">tomato</h1>
				</div>
				<div className="h-96 bg-green-500 bg-gradient-to-t from-white px-20 py-2"></div>
			</div>
		</>
	)
}

export default IndexPage
