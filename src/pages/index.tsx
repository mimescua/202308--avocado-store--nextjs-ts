import { useEffect, useState } from 'react';

const Home = () => {
	const [productList, setProductList] = useState<TProduct[]>([]);

	useEffect(() => {
		window
			.fetch('/api/avo')
			.then((response) => response.json())
			.then(({ data, length }) => {
				setProductList(data);
			});
	}, []);
	return (
		<main>
			<p>This is the Main page</p>
			{productList.map((product, indx) => (
				<div key={indx}>{product.name}</div>
			))}
		</main>
	);
};

export default Home;
