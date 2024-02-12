export interface ISendMailItem {
	description?: boolean;
	name?: string;
	phone?: string;
	mail?: string;
	messanger?: string;
	choice?: string;
	message?: string;
	attachments?: FileAttachment;
}

interface FileAttachment {
	filename: string;
	path: string;
}
