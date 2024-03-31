import { HeroSectionProps } from "@/components/Strapi/Sections/HeroSection/HeroSection";
import { ContentSectionProps } from "@/components/Strapi/ContentSection/ContentSection";

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
	body: [HeroSectionProps | ContentSectionProps];
};

export type CTA = {
	text: string;
	url: string;
};
