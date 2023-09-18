import Link from 'next/link';
import { Feathericons } from 'src/assets/FeatherIcons';
import styles from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<Link href="/">
						<Feathericons icon="chevron-left" width="36" height="36" color="black" />
					</Link>
				</li>
				<li className={styles.tittle}>Search Products</li>
				<li>
					<Link href="/user">
						<Feathericons icon="user" width="36" height="36" color="black" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
