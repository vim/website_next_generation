import Link from "next/link";
import { CTA } from "@/types/strapi";
import List from "../Common/List";

type ListItem = {
	id: number;
	item: string;
};

export type HeroSectionProps = {
	headline?: string;
	cta?: CTA;
	listItems?: ListItem[];
};

export default function HeroSection({ headline, cta, listItems }: HeroSectionProps) {
	return (
		<div className="mb-8">
			{headline && <h1 className="h1-prefix">{headline}</h1>}
			{cta && (
				<Link className="btn-primary mb-4" href={cta.url}>
					{cta.text}
				</Link>
			)}
			{listItems && <List items={listItems} />}
		</div>
	);
}
