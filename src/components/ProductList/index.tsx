import { isEmptyArray } from '@utils/index';

interface Props {
	error: boolean;
	onError: () => void;
	productsQty: number;
	onEmptyProducts: () => void;
	productsSearched: TProduct[];
	onEmptysearchResult: () => void;
	children: (product: TProduct) => React.ReactNode;
	render?: (product: TProduct) => React.ReactNode;
}

const ProductList: React.FC<Props> = (props) => {
	return (
		<>
			{props.error && props.onError()}
			{!props.productsQty && props.onEmptyProducts()}
			{!!props.productsQty && isEmptyArray(props.productsSearched) && props.onEmptysearchResult()}
			{!props.error && props.productsSearched.map(props.children ?? props.render)}
		</>
	);
};

export { ProductList };
