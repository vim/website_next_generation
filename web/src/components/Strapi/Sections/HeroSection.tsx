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
		<div className="flex flex-col justify-end pb-80 h-screen">
			{headline && <h1 className="h1-prefix">{headline}</h1>}
			<div className="flex justify-between">
				{listItems && <List items={listItems} />}
				{cta && (
					<div className="flex">
						<Link className="btn-primary mt-auto mb-0" href={cta.url}>
							{cta.text}
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}
