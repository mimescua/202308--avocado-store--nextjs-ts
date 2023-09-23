import CardOrder from '@components/CardOrder';
import { OrderList } from '@components/Orderlist';
import { EmptyProducts } from '@components/warnings';
import { AvocadoStoreContext } from '@context/index';
import { useContext } from 'react';

const Order = () => {
	const { state } = useContext(AvocadoStoreContext);
	const { cart } = state;

	return (
		<main>
			<p>This is the Order page</p>
			<OrderList productsQty={cart.lenght} products={cart} onEmptyProducts={() => <EmptyProducts />}>
				{(product) => <CardOrder key={product.id} {...product} />}
			</OrderList>
		</main>
	);
};

export default Order;
