"use client";
import useSWR from "swr";
import Hero from "@/components/Strapi/Sections/HeroSection";
import PageContent from "@/components/Strapi/Sections/Content";
import { PageAttributes, Routes } from "@/types/strapi";

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<PageAttributes>);

export default function Home() {
	const { data } = useSWR(`/api/${Routes.homepage}`, fetcher);

	return (
		<main className="pb-12">
			{data && (
				<>
					<Hero headline={data.Hero.headline} list={data.Hero.list} cta={data.Hero.cta} />
					<PageContent entries={data.body} />
				</>
			)}
		</main>
	);
}
