import Card from '@components/Card';
import { ProductList } from '@components/ProductList';
import { Search } from '@components/Search';
import { EmptyProducts, EmptyProductsSearch, ProductsError, ProductsLoading } from '@components/warnings';
import { AvocadoStoreContext } from '@context/index';
import { useContext } from 'react';

const Home = () => {
	const { state, updater } = useContext(AvocadoStoreContext);

	const { productsSearched, productsQty, loading, error, searchValue } = state;
	const { setSearchValue } = updater;

	return (
		<main>
			<Search searchValue={searchValue} setSearchValue={setSearchValue} loading={loading} />

			<div className="columns">
				{!loading && (
					<h1>
						<span>{productsQty} products </span>
						<span>{searchValue === '' ? 'Available' : 'Found'}</span>
					</h1>
				)}
				<ProductList
					error={error}
					loading={loading}
					productsQty={productsQty}
					productsSearched={productsSearched}
					onError={() => <ProductsError />}
					onLoading={() => <ProductsLoading />}
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
