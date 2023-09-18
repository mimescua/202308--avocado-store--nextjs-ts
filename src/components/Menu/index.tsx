import { AvocadoStoreContext } from '@context/index';
import Link from 'next/link';
import { useContext } from 'react';
import { Feathericons } from 'src/assets/FeatherIcons';
import styles from './Menu.module.css';
import MenuIcon from './MenuIcon';

const Menu = () => {
	const { state, updater } = useContext(AvocadoStoreContext);
	const { liked, orders, cart, cartProductsQty } = state;

	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href="/">
						<Feathericons icon="home" className={styles.button} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link href="/liked">
						<MenuIcon icon="heart" count={liked.length} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link href="/purchase-history">
						<MenuIcon icon="shopping-bag" count={orders.length} />
					</Link>
				</li>
				<li className={styles.item}>
					<Link href={`/order`}>
						<MenuIcon icon="shopping-cart" count={cartProductsQty()} />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;
