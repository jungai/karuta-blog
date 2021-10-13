import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
	return (
		<div className="grid place-content-center h-screen">
			<h1 className="text-2xl text-[tomato]">Karuta Blog</h1>
			<Link to="command">commands</Link>
		</div>
	);
};

export default IndexPage;
