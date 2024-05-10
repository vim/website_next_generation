import React from "react";
import Link from "next/link";
import NewsSection from "@/components/Strapi/Sections/NewsSection";
import Card from "@/components/Strapi/Common/Card";
import { CardContent, GenericContentEntry } from "@/types/strapi";
import List from "../Common/List";

type ContentProps = {
	entries: GenericContentEntry[];
};
export default function PageContent({ entries }: ContentProps) {
	const renderContent = (uuid: string, entry: GenericContentEntry): React.ReactNode => {
		if (!("type" in entry)) {
			return (
				<div key={uuid} className="text-white">
					<p>The fetched component has no defined type. Pls have a look in the strapi backend and change your component definition accordingly</p>
				</div>
			);
		}

		switch (entry.type) {
			case "Card":
			case "Plain":
			case "Accordion":
				return (
					<div key={uuid} className="[&:not(:last-child)]:mb-32">
						{renderTextSection(entry)}
					</div>
				);
			case "News":
				return (
					<div key={uuid} className="[&:not(:last-child)]:mb-32">
						<NewsSection news={entry} />
					</div>
				);
			case "CTA":
			case "Primary":
			case "Secondary":
				return (
					<Link key={uuid} className="btn-primary [&:not(:last-child)]:mb-32" href={entry.url}>
						{entry.text}
					</Link>
				);
			case "List":
				return (
					<div className="[&:not(:last-child)]:mb-32">
						<List key={uuid} list={entry.items} />
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

	return entries.map(entry => renderContent(crypto.randomUUID(), entry));
}
