import NewsSection from "@/components/Strapi/Sections/NewsSection";
import { ContentEntry } from "@/types/strapi";

export type SectionType = "Plain" | "Card" | "Accordion";

export type ContentProps = {
	entries: ContentEntry[];
};

export default async function Section({ entries }: ContentProps) {

	return (
		<div>
			{entries.map(entry => {
				switch (entry.__component) {
					case "sections.news-section":
						return <NewsSection headline={entry.headline} newsCount:/>;
					default:
						return renderSection(entry);
				}
			})}
		</div>
	);
}
