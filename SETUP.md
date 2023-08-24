# 1. NextJs (manual setup)

## Create the project directory

```console
mkdir <project_name>
cd <project_name>
```

## Node & typeScript config files

### Add a README.md file

```bash
echo -e '# 202308--avocado-store--nextjs-ts
\nAvocado store' > README.md
```

### Initialize a Node project

```console
npm init --y
```

### Add dependencies

```console
yarn add next react react-dom
code .
```

### Add scripts to package.json file

```js
{
  ...
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}
```

### Add tsconfig.json file

```js
{
	"compilerOptions": {
		"target": "es5",
		"lib": ["dom", "dom.iterable", "esnext"],
		"allowJs": true,
		"skipLibCheck": true,
		"strict": true,
		"noEmit": true,
		"esModuleInterop": true,
		"module": "esnext",
		"moduleResolution": "bundler",
		"resolveJsonModule": true,
		"isolatedModules": true,
		"jsx": "preserve",
		"incremental": true,
		"noImplicitAny": true,
		"noImplicitReturns": true,
		"paths": {
			"@/*": ["./src/*"]
		}
	},
	"include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
	"exclude": ["node_modules"]
}
```

## NextJs & styling files

### Add src/styles/globals.css file

```css
:root {
	--foreground-rgb: 0, 0, 0;
	--background-start-rgb: 214, 219, 220;
	--background-end-rgb: 255, 255, 255;
}

body {
	color: rgb(var(--foreground-rgb));
	background: linear-gradient(
			to bottom,
			transparent,
			rgb(var(--background-end-rgb))
		) rgb(var(--background-start-rgb));
}
```

### Add src/pages/\_app.tsx file

```ts
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
```

### Add src/pages/\_document.tsx file

```ts
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>TS world</title>
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
```

### Add src/pages/index.tsx file

```ts
import React from 'react';

const Home = () => {
	return <main>Hi</main>;
};

export default Home;
```

# 2. Git

## Initialize

```
git init
```

## Add .gitignore file

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

## Configure CRLF only for Windows

```
git config --local core.autocrlf false
```

## Verify CRLF config (it must be set as false)

```
git config core.autocrlf
```

## Add remote

```
git remote add origin https://github.com/<username>/<repo_name>.git
```

## Initial commit

```
git add .
git commit -m "Initial commit"
git branch -M main
git push --set-upstream origin main
```

# 3. ESlint

### Install

```
yarn add eslint eslint-config-next
```

### Configure .eslintrc.json file

```json
{
	"extends": ["next", "next/core-web-vitals", "eslint:recommended"],
	"globals": {
		"React": "readonly"
	},
	"rules": {
		"no-unused-vars": [1, { "args": "after-used", "argsIgnorePattern": "^_" }]
	}
}
```

### Add a script to package.json file

```js
{
  ...
  "scripts": {
    ...
    "lint": "next lint"
  }
}
```

### Test ESlint

```
yarn lint
```

### Commit

```js
...
git commit -m "build: implement eslint"
```

# 4. Prettier

### Install

```
yarn add -D prettier
yarn add -D --exact prettier
```

### Configure .prettierrc file

```json
{
	"trailingComma": "es5",
	"semi": true,
	"singleQuote": true,
	"bracketSpacing": true,
	"bracketSameLine": false,
	"useTabs": true
}
```

### Configure .prettierignore file

```json
.yarn
.next
pnpm-lock.yaml
dist
node_modules
```

### Add a script to package.json file

```js
{
  ...
  "scripts": {
    ...
    "prettier": "prettier --write ."
  }
}
```

### Test Prettier

```js
yarn run prettier
```

### Commit

```js
...
git commit -m "build: implement prettier"
```

# 5. VS Code Configuration

## Configure .vscode/settings.json file

```json
{
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.formatOnSave": true,
	"editor.codeActionsOnSave": {
		"source.fixAll": true,
		"source.organizeImports": true
	}
}
```

## Commit

```
git commit -m "build: implement vscode project settings"
```
