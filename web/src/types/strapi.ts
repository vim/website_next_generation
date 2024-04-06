export type GenericContentEntry = HeroSection | NewsSection | CardContent | TextList | Button | GenericCollectionType;
export type GenericCollectionType = NewsCollection;

export type Button = {
	text: string;
	url: string;
	type: "CTA" | "Primary" | "Secondary";
};

export type TextListItem = {
	id: number;
	text: string;
};

export type TextList = {
	items: TextListItem[];
	type: "List";
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
	list: TextListItem[];
	cta: Button;
};

export type NewsSection = {
	headline: string;
	newsCount: number;
};

export type CardContent = {
	id: number;
	headline: string;
	description: string;
	button?: Button;
	type: "Plain" | "Card" | "Accordion";
};

type CollectionPagination = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

type CollectionMeta = {
	pagination: CollectionPagination;
};

export type NewsCollection = {
	data: NewsPost[];
	meta: CollectionMeta;
	type: "News";
};

type NewsPostContent = {
	title: string;
	text: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};

export type NewsPost = {
	id: number;
	attributes: NewsPostContent;
};
