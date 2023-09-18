import Menu from '@components/Menu';
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
			<Menu />
		</>
	);
};

export default Layout;
