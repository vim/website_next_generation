type contentType = "Plain" | "Card" | "Accordion";

type Content = {
	id: number;
	__component: "general.card";
	headline: string;
	description: string;
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
