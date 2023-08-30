import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* favicon */}
				{/* webfont */}
				{/* stylesheet */}
				{/* script.js */}
				<title>Avocado store</title>
				<meta property="og:title" content="My page title" key="title" />
				<link rel="icon" href="/logo.svg" sizes="any" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
