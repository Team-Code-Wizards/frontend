export interface ISendMailItem {
	description?: boolean;
	name?: string;
	tel?: string;
	mail?: string;
	messenger?: string;
	siteOrder?: string;
	message?: string;
	attachments?: FileAttachment;
}

interface FileAttachment {
	filename: string;
	path: string;
}
