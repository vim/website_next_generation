type contentType = "Plain" | "Card" | "Accordion";
type ButtonType = "CTA" | "Primary" | "Secondary";

export type Button = {
	text: string;
	type: ButtonType;
	url: string;
};

export type Content = {
	id: number;
	__component: string;
	headline: string;
	description?: string;
	type: contentType;
};

type PageAttributes = {
	pageTitle: string;
	createdAt: string;
	updatedAt: string;
	pubblishedAt: string;
	heroSection: string[];
	contentSection: Content[];
};

export type PageContent = {
	id: number;
	attributes: PageAttributes;
};
