import PrivacyPolicy from '@/components/PrivacyPolicy';

import styles from './style.module.scss';

export default function MainPage() {
	return (
		<main className={styles.main}>
			<PrivacyPolicy />
		</main>
	);
}
