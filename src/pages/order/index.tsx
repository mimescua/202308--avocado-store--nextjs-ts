import CardOrder from '@components/CardOrder';
import { OrderList } from '@components/Orderlist';
import { EmptyProducts } from '@components/warnings';
import { AvocadoStoreContext } from '@context/index';
import router from 'next/router';
import { useContext } from 'react';
import styles from './order.module.css';

const PreOrder = () => {
	const { state, updater } = useContext(AvocadoStoreContext);
	const { cart, cartProductsQty, cartProductsPrice } = state;
	const { setCart } = updater;
	const totalQty = cartProductsQty();
	const totalPrice = parseFloat(cartProductsPrice().toFixed(2));

	const navigateTohome = () => {
		router.push('/');
	};

	const handleCheckout = () => {
		setCart([]);
		navigateTohome();
	};

	return (
		<main>
			{!!totalQty && <p>Cart ({totalQty} products)</p>}
			<OrderList productsQty={totalQty} products={cart} onEmptyProducts={() => <EmptyProducts />}>
				{(product) => <CardOrder key={product.id} {...product} />}
			</OrderList>
			{!!totalQty && (
				<div className={styles.container}>
					<p className={styles.total}>
						<span>Total:</span>
						<span>${totalPrice}</span>
					</p>
					<button className={styles.checkout} onClick={handleCheckout}>
						CHECKOUT ({totalQty} products)
					</button>
				</div>
			)}
		</main>
	);
};

export default PreOrder;
