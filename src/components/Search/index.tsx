import React from 'react';
import styles from './Search.module.css';

interface Props {
	searchValue: string;
	setSearchValue: React.Dispatch<React.SetStateAction<string>>;
	loading: boolean;
}

const Search: React.FC<Props> = ({ searchValue, setSearchValue, loading }) => {
	return (
		<div className={styles.search}>
			<input
				className={styles['search-box']}
				placeholder="Search..."
				value={searchValue}
				onChange={(event) => setSearchValue(event.target.value)}
				disabled={loading}
			/>
		</div>
	);
};

export { Search };
