import Failure from '@/components/Popup/Failure';
import Success from '@/components/Popup/Success';

//import styles from "./style.module.scss";

console.log();
export default function Home() {
	return (
		<main>
			<Success />
			<Failure />
		</main>
	);
}
