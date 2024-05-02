"use client";
import { useEffect, useState } from "react";
import Hero from "@/components/Strapi/Sections/HeroSection";
import PageContent from "@/components/Strapi/Sections/Content";
import { PageAttributes } from "@/types/strapi";

export default function Home() {
	const [pageData, setPageData] = useState<PageAttributes | undefined>(undefined);

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(`/api/homepage`);
			if (!res.ok) {
				throw new Error("fetching homepage hero failed");
			}

			const data = (await res.json()) as PageAttributes;
			setPageData(data);
		};

		fetchData();
	}, []);

	return (
		<main className="pb-12">
			{pageData && (
		<main className="relative z-1 pb-12">
				<>
					<Hero headline={pageData.Hero.headline} list={pageData.Hero.list} cta={pageData.Hero.cta} />
					<PageContent entries={pageData.body} />
				</>
			)}
		</main>
	);
}
