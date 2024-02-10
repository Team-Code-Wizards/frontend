import { InfoMsgProvider } from '@/components/InfoMsgContext';
import MainPage from '@/components/MainPage';

export default function Home() {
	return (
		<InfoMsgProvider>
			<MainPage />
		</InfoMsgProvider>
	);
}
