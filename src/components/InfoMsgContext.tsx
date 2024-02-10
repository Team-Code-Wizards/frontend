'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

type InfoMsgContextType = {
	infoMsg: boolean | null;
	showSuccessInfoMsg: () => void;
	showFailedInfoMsg: () => void;
	hideInfoMsg: () => void;
};

const InfoMsgContextDefault: InfoMsgContextType = {
	infoMsg: null,
	showSuccessInfoMsg: () => {},
	showFailedInfoMsg: () => {},
	hideInfoMsg: () => {},
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

	const showSuccessInfoMsg = () => {
		setInfoMsg(true);
		setTimeout(() => setInfoMsg(null), 2000);
	};

	const showFailedInfoMsg = () => {
		setInfoMsg(false);
		setTimeout(() => setInfoMsg(null), 2000);
	};

	const hideInfoMsg = () => {
		setInfoMsg(null);
	};

	const value = {
		infoMsg,
		showSuccessInfoMsg,
		showFailedInfoMsg,
		hideInfoMsg,
	};

	return (
		<InfoMsgContext.Provider value={value}>{children}</InfoMsgContext.Provider>
	);
}
