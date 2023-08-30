import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductItem = () => {
	const [product, setProduct] = useState<TProduct>();

	const {
		query: { productId },
	} = useRouter();

	useEffect(() => {
		window
			.fetch(`/api/avo/${productId}`)
			.then((response) => response.json())
			.then((json) => {
				setProduct(json);
			})
			.catch((error) => console.error(error.message));
	}, [product]);

	return (
		<main>
			<h1>Product {productId}</h1>
			<div>{product?.name}</div>
		</main>
	);
};

export default ProductItem;
