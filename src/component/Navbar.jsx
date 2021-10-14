import { Link } from 'gatsby'
import React from 'react'

const Navbar = () => {
	return (
		<nav className="sticky top-0 w-full flex items-center justify-between border-b border-black px-20 py-3 bg-white">
			<div className="flex items-center flex-shrink-0 mr-10 border-l-4 border-[tomato]">
				<span className="w-full text-center font-semibold text-2xl tracking-tight px-1">
					eiei<span className="text-green-500">.</span>ie
				</span>
			</div>
			<div className="flex space-x-6 text-sm">
				<Link to="/posts/command">
					<div>
						<a className="hover:text-[tomato]">Karuta</a>
					</div>
				</Link>
				<Link to="/posts/command">
					<div>
						<a className="hover:text-green-500">Blog</a>
					</div>
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
