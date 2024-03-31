import { CTA } from "@/types/strapi";

export type HeroSectionProps = {
	headline: string;
	list: string[];
	cta: CTA;
};
export default function HeroSection({ headline, list, cta }: HeroSectionProps) {
	return (
		<div>
			<h1>{headline}</h1>
			<ul>
				{list.map(el => {
					return <li>{el}</li>;
				})}
			</ul>
		</div>
	);
}
