import { AvocadoStoreContext } from '@context/index';
// import { useRouter } from 'next/router';
import NumberInput from '@components/NumberInput';
import useRouting from '@hooks/useRouting';
import React, { MouseEventHandler, useContext } from 'react';
import styles from './CardOrder.module.css';

const CardOrder: React.FC<TProductOrder> = (props) => {
	const {
		id,
		qty,
		detail: {
			sku,
			name,
			price,
			image,
			attributes: { description, shape, hardiness, taste },
		},
	} = props;
	// const [count, setCount] = useState<number>(qty);
	const { navigateToDetail } = useRouting();
	const { state, updater } = useContext(AvocadoStoreContext);
	const { liked } = state;
	const { setLiked, incrementProdQty, decrementProdQty } = updater;

	const addProductsToLiked: MouseEventHandler<HTMLSpanElement> = (event) => {
		event.stopPropagation();
		setLiked([...liked, props]);
	};

	const removeProductsFromLiked: MouseEventHandler<HTMLSpanElement> = (event) => {
		event.stopPropagation();
		const currentLiked = [...liked];
		const likedIndex = currentLiked.findIndex((obj) => obj.id === id);
		currentLiked.splice(likedIndex, 1);

		setLiked([...currentLiked]);
	};

	return (
		<div className={styles.card}>
			<figure className={styles.figure}>
				<img className={styles.image} src={image} alt={name} />
			</figure>
			<p className={styles.info}>
				<span className={styles.title} onClick={() => navigateToDetail(id)}>
					{name}
				</span>
				<span className={styles.price}>{`$${price}`}</span>
			</p>
			<div>
				<NumberInput
					count={qty}
					incrementValue={() => incrementProdQty(id)}
					decrementValue={() => decrementProdQty(id)}
				/>
				<small className={styles.warning}>Max. 10 products allowed</small>
			</div>
		</div>
	);
};

export default CardOrder;
