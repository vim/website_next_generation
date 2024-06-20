"use client";
import { redirect } from "next/navigation";
import Error from "next/error";
import useSWR from "swr";
import Hero from "@/components/Strapi/Sections/HeroSection";
import PageContent from "@/components/Strapi/Sections/Content";
import { PageAttributes, Routes } from "@/types/strapi";

const fetcher = (url: string) => fetch(url).then(res => res.json() as Promise<PageAttributes>);

export default function Home() {
	const { data, error } = useSWR<PageAttributes, Error>(`/api/${Routes.homepage}`, fetcher);

	if (error) {
		redirect("/error/500");
	}

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
