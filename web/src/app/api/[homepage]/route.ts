import { getNews } from "@/helpers/homepage";
import { SingleType } from "@/types/strapi";

export async function GET() {
	const res = await fetch(`${process.env.CMS_API}/home?populate=deep`, {
		headers: {
			"Content-Type": "application/json",
			"API-Key": process.env.CMS_API_TOKEN!,
		},
	});

	if (!res.ok) {
		throw new Error("Fetching single type component home failed");
	}

	const homePageData = (await res.json()) as SingleType;

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

	return Response.json(homePageData.data.attributes);
}
