import { HeroSectionProps } from "@/components/Strapi/Sections/HeroSection";
import { ContentSectionEntry } from "@/components/Strapi/Sections/ContentSection";

export type ContentSectionType = "Plain" | "Card" | "Accordion";

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
	Hero: HeroSectionProps;
	body: ContentSectionEntry[];
};

export type CTA = {
	text: string;
	url: string;
};

export type ListItem = {
	id: number;
	item: string;
};
