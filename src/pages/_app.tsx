import Layout from '@/components/Layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	// Providers - Context/Providers, custom themes, data
	// Layout
	// Aditional props
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
