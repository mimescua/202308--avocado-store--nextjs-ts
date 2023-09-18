import { Feathericons } from '@assets/FeatherIcons';
import React from 'react';
import styles from './NumberInput.module.css'; // Import your CSS file

interface Props {
	count: number;
	incrementValue: () => void;
	decrementValue: () => void;
}

const NumberInput: React.FC<Props> = ({
	count,
	incrementValue,
	decrementValue,
}) => {
	return (
		<span className={styles['change-qty']}>
			<Feathericons
				icon="minus"
				className={styles.control}
				onClick={decrementValue}
				width={12}
				height={12}
			/>
			<input type="number" value={count} min={1} max={100} readOnly />
			<Feathericons
				icon="plus"
				className={styles.control}
				onClick={incrementValue}
				width={12}
				height={12}
			/>
		</span>
	);
};

export default NumberInput;
