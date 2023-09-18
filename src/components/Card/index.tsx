import { AvocadoStoreContext } from '@context/index';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { MouseEventHandler, useContext } from 'react';
import { Feathericons } from 'src/assets/FeatherIcons';
import styles from './Card.module.css';

const Card: React.FC<TProduct> = (props) => {
	const {
		id,
		sku,
		name,
		price,
		image,
		attributes: { description, shape, hardiness, taste },
	} = props;
	const router = useRouter();
	const { state, updater } = useContext(AvocadoStoreContext);
	const { liked } = state;
	const { setLiked } = updater;

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

	const likedIcon = (id: string) => {
		const isInCart = liked.filter((product: TProduct) => product.id === id).length > 0;
		return isInCart ? (
			<span className={styles['icon-liked']} onClick={removeProductsFromLiked}>
				<Feathericons icon="heart" stroke="rgb(var(--brown-rgb))" fill="white" />
			</span>
		) : (
			<span className={styles['icon-not-liked']} onClick={addProductsToLiked}>
				<Feathericons icon="heart" stroke="rgb(var(--green-dark-rgb))" fill="white" />
			</span>
		);
	};

	return (
		<div className={styles.masonry}>
			<Link href={`/product/${id}`} className={styles.card}>
				<Image src={image} className={styles.figure} width={200} height={200} alt={name} />
				<p className={styles.info}>
					<span className={styles.title}>{name}</span>
					<span className={styles.price}>{`$${price}`}</span>
				</p>
			</Link>
			{likedIcon(id)}
		</div>
	);
};

export default Card;
