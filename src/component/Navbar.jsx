import { Link } from 'gatsby'
import React, { useState } from 'react'

const Navbar = () => {
	const [wording, setWording] = useState('What is tomato?')

	if (typeof window !== 'undefined') {
		window.onscroll = () => scrollFn()
	}

	const scrollFn = () => {
		const scroller = document.documentElement.scrollTop
		if (scroller < 50) {
			setWording('What is tomato?')
		} else {
			setWording('tomatoooooooooooooo:o')
		}
	}

	return (
		<nav className="sticky top-0 w-full flex items-center justify-between border-b border-black px-20 py-3 bg-white">
			<div className="flex items-center flex-shrink-0 mr-10 border-l-4 border-[tomato]">
				<span className="w-full text-center font-semibold text-2xl tracking-tight px-1">
					eiei<span className="text-green-500">.</span>ie
				</span>
			</div>
			<div className="flex space-x-6 text-sm">
				<p>{wording}</p>
				<Link to="/posts/command" className="hover:text-[tomato]">
					Karuta
				</Link>
				<Link to="/posts/command" className="hover:text-green-500">
					Blog
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
