import { isEmptyArray } from '@utils/index';

interface Props {
	productsQty: number;
	onEmptyProducts: () => void;
	products: TProductOrder[];
	children: (product: TProductOrder) => React.ReactNode;
	render?: (product: TProductOrder) => React.ReactNode;
}

const OrderList: React.FC<Props> = (props) => {
	return (
		<>
			{!props.productsQty &&
				isEmptyArray(props.products) &&
				props.onEmptyProducts()}
			{props.products.map(props.children ?? props.render)}
		</>
	);
};

export { OrderList };
