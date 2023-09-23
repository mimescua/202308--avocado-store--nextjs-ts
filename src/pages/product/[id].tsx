import NumberInput from '@components/NumberInput';
import { AvocadoStoreContext } from '@context/index';
import fetch from 'isomorphic-unfetch';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Feathericons } from 'src/assets/FeatherIcons';
import styles from './product.module.css';

const ProductItem = () => {
	const {
		query: { id },
	} = useRouter();
	const { state, updater } = useContext(AvocadoStoreContext);
	const { count, product } = state;
	const { addProductsToCart, setProduct, incrementCount, decrementCount } = updater;

	useEffect(() => {
		fetch(`/api/avo/${id}`)
			.then((response) => response.json())
			.then((json) => {
				setProduct(json);
			})
			.catch((error) => console.error(error.message));
	}, [product]);

	return (
		<main>
			<div className={styles.container}>
				<figure className={styles.figure}>
					<img className={styles.image} src={product?.image} alt={product?.name} />
				</figure>
				<div className={styles.info}>
					<p className={styles.title}>{product?.name}</p>
					<p className={styles.description}>{`${product?.attributes.description}`}</p>
				</div>
			</div>
			<nav className={styles.nav}>
				<div className={styles.row}>
					<ul className={styles.list}>
						<li className={styles.attributes}>
							<Feathericons icon="droplet" title={'SHAPE'} className={styles.button} width={36} height={36} />
							<small style={{ textAlign: 'center' }}>{product?.attributes.shape}</small>
						</li>
						<li className={styles.attributes}>
							<Feathericons icon="thermometer" title={'HARDINESS'} className={styles.button} width={36} height={36} />
							<small style={{ textAlign: 'center' }}>{product?.attributes.hardiness}</small>
						</li>
						<li className={styles.attributes}>
							<Feathericons icon="message-circle" title={'TASTE'} className={styles.button} width={36} height={36} />
							<small style={{ textAlign: 'center' }}>{product?.attributes.taste}</small>
						</li>
					</ul>
				</div>
				<div className={styles.row}>
					<ul className={styles.list}>
						<li className={styles.actions}>
							<small>Price</small>
							<h1 style={{ margin: 0 }}>${product?.price}</h1>
						</li>
						<li className={styles.actions}>
							<small style={{ paddingBottom: 3 }}>Quantity</small>
							<NumberInput count={count} incrementValue={incrementCount} decrementValue={decrementCount} />
						</li>
						<li className={styles.actions} onClick={addProductsToCart}>
							<span className={styles['add-to-cart']}>Add to Cart</span>
						</li>
					</ul>
				</div>
			</nav>
		</main>
	);
};

export default ProductItem;
