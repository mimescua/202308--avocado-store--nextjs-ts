import Card from '@components/Card';
import { ProductList } from '@components/ProductList';
import { Search } from '@components/Search';
import { EmptyProducts, EmptyProductsSearch, ProductsError } from '@components/warnings';
import { AvocadoStoreContext } from '@context/index';
import { GetStaticProps } from 'next';
import { useContext } from 'react';

export const getStaticProps: GetStaticProps = async () => {
	const response = await fetch(`${process.env.API_URL}/api/avo`);
	const { data, lenght, error: errorString }: TAPIAvoResponse = await response.json();

	return {
		props: {
			data,
			lenght,
			error: errorString || '',
		},
	};
};

const Home = ({ data, lenght, error }: TAPIAvoResponse) => {
	const { state, updater } = useContext(AvocadoStoreContext);

	const { productsSearched, loading, searchValue } = state;
	const { setSearchValue } = updater;
	const currentProducts: TProduct[] = productsSearched(data);

	return (
		<main>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />

			<div className="columns">
				<h1>
					<span>{currentProducts.length} products </span>
					<span>{searchValue === '' ? 'Available' : 'Found'}</span>
				</h1>
				<ProductList
					error={!!error}
					productsQty={currentProducts.length}
					productsSearched={currentProducts}
					onError={() => <ProductsError />}
					onEmptysearchResult={() => <EmptyProductsSearch searchValue={searchValue} />}
					onEmptyProducts={() => <EmptyProducts />}
				>
					{(product) => <Card key={product.id} {...product} />}
				</ProductList>
			</div>
			<style jsx>{`
				div {
					column-count: 2;
					column-gap: 1rem;
					width: 100%;
					max-width: 480px;
				}
			`}</style>
		</main>
	);
};

export default Home;
