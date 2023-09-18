import NumberInput from '@components/NumberInput';
import { AvocadoStoreContext } from '@context/index';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
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

	const { updater } = useContext(AvocadoStoreContext);
	const { incrementProdQty, decrementProdQty } = updater;

	return (
		<div className={styles.card}>
			<Image src={image} className={styles.figure} width={80} height={80} alt={name} />
			<p className={styles.info}>
				<Link href={`/product/${id}`} className={styles.title}>
					{name}
				</Link>
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
