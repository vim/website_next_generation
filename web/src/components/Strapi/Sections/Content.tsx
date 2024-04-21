import React from "react";
import Link from "next/link";
import NewsSection from "@/components/Strapi/Sections/NewsSection";
import Card from "@/components/Strapi/Common/Card";
import { CardContent, GenericContentEntry } from "@/types/strapi";

type ContentProps = {
	entries: GenericContentEntry[];
};
export default async function PageContent({ entries }: ContentProps) {
	const renderContent = (entry: GenericContentEntry): React.ReactNode => {
		if (!("type" in entry)) {
			return <div className="text-white">sth. went wrong</div>;
		}

		if (entry.type === "Card" || entry.type === "Plain" || entry.type === "Accordion") {
			return <div className="[&:not(:last-child)]:mb-32">{renderTextSection(entry)}</div>;
		} else if (entry.type === "Primary" || entry.type === "CTA" || entry.type === "Secondary") {
			return (
				<div className="[&:not(:last-child)]:mb-32">
					<Link className="btn-primary block w-fit mr-0 ml-auto" href={entry.url}>
						{entry.text}
					</Link>
				</div>
			);
		} else if (entry.type === "News") {
			return (
				<div className="[&:not(:last-child)]:mb-32">
					<NewsSection news={entry} />
				</div>
			);
		}
	};

	const renderTextSection = (entry: CardContent): React.ReactNode => {
		switch (entry.type) {
			case "Card":
				return <Card headline={entry.headline} text={entry.description} button={entry.button} hasShadow />;
			case "Accordion":
				return <div className="text-white">Accordion</div>;
			default:
				return <Card headline={entry.headline} text={entry.description} />;
		}
	};

	return <>{entries.map(entry => renderContent(entry))}</>;
}
