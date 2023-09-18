import router from 'next/router';

function useRouting() {
	const navigateTohome = () => {
		router.push('/');
	};

	const navigateToDetail = (id: string) => {
		router.push(`/product/${id}`);
	};

	return {
		navigateTohome,
		navigateToDetail,
	};
}

export default useRouting;
