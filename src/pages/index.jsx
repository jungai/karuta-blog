import React from 'react'
import Navbar from '../component/Navbar'

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<div>
				<div className="bg-tomato bg-gradient-to-t from-green-500 px-6 sm:px-20 pt-3 pb-20">
					<h1 className="text-6xl sm:text-9xl text-green-500">tomato</h1>
					<h1 className="text-6xl sm:text-9xl text-[tomato]">
						<span className="text-4xl sm:text-6xl text-black ml-1 mr-3 sm:mx-3">to not be</span>
						Apple.
					</h1>
				</div>
				<div className="h-96 bg-green-500 bg-gradient-to-t from-white px-20 py-2"></div>
			</div>
		</>
	)
}

export default IndexPage
