import Link from "next/link";
import { HeroSection } from "@/types/strapi";
import List from "../Common/List";

export default function Hero({ headline, cta, list }: HeroSection) {
	return (
		<div className="relative flex flex-col justify-end pb-[48rem] h-screen max-w-7xl">
			<span className="absolute z-0 top-[13rem] right-2 left-2 font-fira text-[12rem] md:hero-bg-text-clamp leading-[400px] text-gray-2 font-bold text-center">
				Vim
			</span>
			<div className="z-10">
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
		</div>
	);
}
