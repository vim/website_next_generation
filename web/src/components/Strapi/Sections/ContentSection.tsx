import Plain from "@/components/Strapi/Common/Plain";
import Carousel from "@/components/Strapi/Common/Carousel";
import Card from "@/components/Strapi/Common/Card";
import { CTA } from "@/types/strapi";

export type SectionType = "Plain" | "Card" | "Accordion";

type SectionEntry = {
	id: number;
	type: SectionType;
	headline: string;
	description?: string;
	cta?: CTA;
};

export type ContentSectionProps = {
	entries: SectionEntry[];
};

export default async function ContentSection({ entries }: ContentSectionProps) {
	const renderContent = (entry: SectionEntry) => {
		switch (entry.type) {
			case "Card":
				return <Card headline={entry.headline} text={entry.description} />;
			case "Accordion":
				return (
					<Carousel>
						<div>
							<h2 className="h2">{entry.headline}</h2>
							<p className="paragraph">{entry.description}</p>
						</div>
					</Carousel>
				);
			default:
				return <Plain headline={entry.headline} text={entry.description} />;
		}
	};

	return (
		<>
			{entries.map(entry => {
				return renderContent(entry);
			})}
		</>
	);
}
