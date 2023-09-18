import { Feathericons, IconNames } from 'src/assets/FeatherIcons';
import styles from './Menu.module.css';

interface Props {
	icon: IconNames;
	count: number;
}

const MenuIcon: React.FC<Props> = ({ icon, count }) => {
	return (
		<div className={styles['icon-wrapper']}>
			<Feathericons icon={icon} className={styles.button} />
			<div className={styles['icon-count']}>{count}</div>
		</div>
	);
};

export default MenuIcon;
