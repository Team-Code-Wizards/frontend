import { useInfoMsg } from '@/components/InfoMsgContext';
import sendRequest from '@/service/sendrequest';

import { ISendMailItem } from './type';

export default function useSubmitter() {
	const { showSuccessInfoMsg, showFailedInfoMsg } = useInfoMsg();
	const submitter = async ({ ...data }: ISendMailItem) => {
		try {
			await sendRequest(data);

			showSuccessInfoMsg();
		} catch {
			showFailedInfoMsg();
		}
	};

	return submitter;
}
