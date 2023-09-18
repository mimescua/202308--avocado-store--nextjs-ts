import useLocalStorage from '@hooks/useLocalStorage';
import React, { MouseEventHandler, createContext, useEffect, useReducer } from 'react';

const AvocadoStoreContext = createContext<any | undefined>(undefined);

interface Props {
	children: React.ReactNode;
}

interface ProductState {
	products: TProduct[];
	productsQty: number;
	loading: boolean;
	error: boolean;
}

const AvocadoStoreProvider: React.FC<Props> = ({ children }) => {
	const [productsState, setProductsState] = useReducer(
		(state: ProductState, newState: Partial<ProductState>) => ({
			...state,
			...newState,
		}),
		{
			products: [],
			productsQty: 0,
			loading: true,
			error: false,
		}
	);
	const { products, productsQty, loading, error } = productsState;

	const onError = (error: any) => setProductsState({ error });
	const onSuccess = (data: TProduct[], lenght: number) =>
		setProductsState({ products: data, productsQty: lenght, loading: false });

	const [product, setProduct] = React.useState<TProduct>();

	const [liked, setLiked] = React.useState<Array<TProduct>>([]);

	const [cart, setCart] = React.useState<Array<TProductOrder>>([]);

	const [order, setOrder] = React.useState<TProductOrderList>();

	const [orders, setOrders] = React.useState<Array<TProductOrderList>>([]);

	const [count, setCount] = React.useState<number>(1);

	const [searchValue, setSearchValue] = React.useState('');
	const { item: account, saveItem: saveAccount } = useLocalStorage('ACCOUNT', {});
	const { item: signOut, saveItem: saveSignOut } = useLocalStorage('SIGN-OUT', true);

	const productsSearched = products.filter((product) => product.name.toUpperCase().includes(searchValue.toUpperCase()));
	const cartProductsQty = () => cart.reduce((sum, { qty }) => sum + qty, 0);
	const cartProductsPrice = () => cart.reduce((sum, { qty, detail: { price } }) => sum + qty * price, 0);
	const addProductsToCart: MouseEventHandler<HTMLElement> = (event) => {
		event.stopPropagation();
		if (!product) return;

		const currentCart = [...cart];
		const productIndex = currentCart.findIndex((obj) => obj.id === product.id);
		productIndex !== -1
			? (currentCart[productIndex].qty += count)
			: currentCart.push({ id: product.id, qty: count, detail: product });
		setCart(currentCart);
		setCount(1);
	};
	const incrementProdQty = (id: string) => {
		const currentCart = [...cart];
		const productIndex = currentCart.findIndex((obj) => obj.id === id);
		const { qty } = currentCart[productIndex];

		if (qty === 10) return;
		currentCart[productIndex].qty += 1;
		setCart(currentCart);
	};
	const decrementProdQty = (id: string) => {
		const currentCart = [...cart];
		const productIndex = currentCart.findIndex((obj) => obj.id === id);
		const { qty } = currentCart[productIndex];

		if (qty === 1) return;
		currentCart[productIndex].qty -= 1;
		setCart(currentCart);
	};
	const incrementCount = () => {
		if (count === 10) return;
		setCount((prevValue) => prevValue + 1);
	};
	const decrementCount = () => {
		if (count === 1) return;
		setCount((prevValue) => prevValue - 1);
	};

	useEffect(() => {
		try {
			window
				.fetch('/api/avo')
				.then((response) => response.json())
				.then(({ data, lenght }) => {
					onSuccess(data, lenght);
				});
		} catch (error) {
			onError(error);
		}
	}, []);

	const state = {
		count,
		searchValue,
		productsSearched,
		productsQty,
		loading,
		error,
		product,
		cart,
		cartProductsQty,
		cartProductsPrice,
		liked,
		orders,
	};

	const updater = {
		setSearchValue,
		setProduct,
		setCart,
		setLiked,
		setOrders,
		addProductsToCart,
		incrementProdQty,
		decrementProdQty,
		incrementCount,
		decrementCount,
	};

	return (
		<AvocadoStoreContext.Provider
			value={{
				state,
				updater,
			}}
		>
			{children}
		</AvocadoStoreContext.Provider>
	);
};

export { AvocadoStoreContext, AvocadoStoreProvider };
