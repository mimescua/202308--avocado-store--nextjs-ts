import { useRouter } from 'next/router';

const ProductItem = () => {
	const {
		query: { productId },
	} = useRouter();
	return <main>Product {productId}</main>;
};

export default ProductItem;
