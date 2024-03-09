'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type InfoMsgContextType = {
	infoMsg: boolean | null;
	showSuccessInfoMsg: () => void;
	showFailedInfoMsg: () => void;
	hideInfoMsg: () => void;
	show: boolean;
};

const InfoMsgContextDefault: InfoMsgContextType = {
	infoMsg: null,
	showSuccessInfoMsg: () => {},
	showFailedInfoMsg: () => {},
	hideInfoMsg: () => {},
	show: true,
};

export const InfoMsgContext = createContext<InfoMsgContextType>(
	InfoMsgContextDefault
);

export function useInfoMsg() {
	return useContext(InfoMsgContext);
}

type Props = {
	children: ReactNode;
};

export function InfoMsgProvider({ children }: Props) {
	const [infoMsg, setInfoMsg] = useState<boolean | null>(null);
	const [show, setShow] = useState(true);

	const showSuccessInfoMsg = () => {
		setInfoMsg(true);
		setTimeout(() => setShow(false), 1700);

		setTimeout(() => {
			setInfoMsg(null);

			setShow(true);
		}, 2000);
	};

	const showFailedInfoMsg = () => {
		setInfoMsg(false);
		setTimeout(() => setShow(false), 1700);

		setTimeout(() => {
			setInfoMsg(null);

			setShow(true);
		}, 2000);
	};

	const hideInfoMsg = () => {
		setShow(false);

		setTimeout(() => {
			setShow(true);

			setInfoMsg(null);
		}, 300);
	};

	const value = {
		infoMsg,
		showSuccessInfoMsg,
		showFailedInfoMsg,
		hideInfoMsg,
		show,
	};

	return (
		<InfoMsgContext.Provider value={value}>{children}</InfoMsgContext.Provider>
	);
}
