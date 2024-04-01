export type GenericContentEntry = HeroSection | NewsSection | Card | TextListItem | Button;

export type Button = {
	text: string;
	url: string;
};

export type TextListItem = {
	id: number;
	item: string;
};

export type SingleType = {
	data: SingleTypeData;
	meta: unknown;
	news?: unknown;
};

export type SingleTypeData = {
	id: number;
	attributes: SingleTypeAttributes;
};

export type SingleTypeAttributes = {
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	Hero: HeroSection;
	body: GenericContentEntry[];
};

export type HeroSection = {
	headline?: string;
	listItems: TextListItem[];
	cta: Button;
};

export type NewsSection = {
	headline: string;
	amount: number;
};

export type Card = {
	id: number;
	__component: "general.card";
	headline: string;
	description: string;
	type: "Plain" | "Card" | "Accordion";
};
