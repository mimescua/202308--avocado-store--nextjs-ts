import Navbar from '@components/Navbar';
import React from 'react';

type Props = {
	children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<footer>This is the footer</footer>
		</>
	);
};

export default Layout;
