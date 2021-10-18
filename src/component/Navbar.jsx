import { Link } from 'gatsby'
import React, { useState } from 'react'
import tomato from '../image/tomato_logo.png'

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
		<nav className="z-50 sticky top-0 w-full flex items-center justify-between border-b border-black px-6 sm:px-20  py-3 bg-white">
			<div className="flex items-center flex-shrink-0 mr-10">
				<span className="flex items-end w-full text-center font-semibold text-2xl tracking-tight px-1 transition transform hover:-translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">
					<img src={tomato} alt="logo" className="w-10 mr-3" />
					tomato<span className="text-green-500">.</span>
				</span>
			</div>
			<div className="hidden sm:flex space-x-6 text-sm">
				<p>{wording}</p>
				<Link to="/karuta/command" className="hover:text-tomato">
					Karuta
				</Link>
				<Link to="/karuta/command" className="hover:text-green-500">
					Blog
				</Link>
			</div>
		</nav>
	)
}

export default Navbar
