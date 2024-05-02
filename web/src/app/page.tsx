"use client";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Hero from "@/components/Strapi/Sections/HeroSection";
import PageContent from "@/components/Strapi/Sections/Content";
import { PageAttributes } from "@/types/strapi";

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<PageAttributes>);

export default function Home() {
	// const [pageData, setPageData] = useState<PageAttributes | undefined>(undefined);
	const { data } = useSWR("/api/homepage", fetcher);

	return (
		<main className="relative z-1 pb-12">
			{data && (
				<>
					<Hero headline={data.Hero.headline} list={data.Hero.list} cta={data.Hero.cta} />
					<PageContent entries={data.body} />
				</>
			)}
		</main>
	);
}
