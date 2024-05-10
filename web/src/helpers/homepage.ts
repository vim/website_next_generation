import qs from "qs";
import { NewsCollection, GenericContentEntry, HeroSection, SingleType } from "@/types/strapi";

export async function getHomePageBody(): Promise<GenericContentEntry[]> {
	const response = await fetch(`${process.env.CMS_API}/home?populate=deep`);

	if (!response.ok) {
		throw new Error("Fetching of home content failed");
	}

	const homePageData = (await response.json()) as SingleType;

	const news = homePageData.data.attributes.body
		.map((el, i) => {
			if ("newsCount" in el) return { index: i, newsCount: el.newsCount };
		})
		.filter(Boolean);

	for (const newsEntry of news) {
		if (!newsEntry) break;
		const fetchedNews = await getNews(newsEntry?.newsCount);

		homePageData.data.attributes.body[newsEntry.index] = fetchedNews;
	}

	return homePageData.data.attributes.body;
}

export async function getHomePageHero(): Promise<HeroSection> {
	const query = qs.stringify(
		{
			populate: ["Hero.cta", "Hero.list"],
		},
		{
			encodeValuesOnly: true,
		}
	);

	const response = await fetch(`${process.env.CMS_API}/home?${query}`);

	if (!response.ok) {
		throw new Error("Fetching single type component home failed");
	}

	const homePageHero = (await response.json()) as SingleType;
	return homePageHero.data.attributes.Hero;
}

export async function getNews(count: number = 5): Promise<NewsCollection> {
	const query = qs.stringify(
		{
			pagination: {
				pageSize: count,
				page: 1,
			},
		},
		{
			encodeValuesOnly: true,
		}
	);
	const response = await fetch(`${process.env.CMS_API}/newsposts?${query}`);

	if (!response.ok) {
		throw new Error("Fetching news failed");
	}

	const news = (await response.json()) as NewsCollection;
	news.type = "News";

	return news;
}
