import Link from 'next/link';

const Navbar = () => {
	return (
		<nav>
			<menu>
				<Link href="/">Home</Link>
				<Link href="/about">About</Link>
			</menu>
		</nav>
	);
};

export default Navbar;
