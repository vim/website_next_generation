import Link from "next/link";
import { HeroSection } from "@/types/strapi";
import List from "../Common/List";

export default function Hero({ headline, cta, list }: HeroSection) {
	return (
		<div className="flex flex-col justify-end pb-80 h-screen">
			{headline && <h1 className="h1-prefix">{headline}</h1>}
			<div className="flex justify-between">
				{list && <List list={list} />}
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
