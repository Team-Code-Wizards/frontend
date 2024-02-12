export interface ISendMailItem {
	description?: boolean;
	name?: string;
	tel?: string;
	mail?: string;
	messenger?: string;
	siteOrder?: string;
	message?: string;
	attachments?: FileList[];
}

interface FileList {
	lastModified: number;
	name: string;
	size: number;
	type: string;
	webkitRelativePath: string;
}
