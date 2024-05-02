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

	if (!homePageData.data.attributes.body) {
		return Response.json("Homepage contains no data");
	}

	const newsSections = homePageData.data.attributes.body.flatMap((contentEntry, i) => {
		if ("newsCount" in contentEntry) return { index: i, newsCount: contentEntry.newsCount };
		else return [];
	});

	for (const newsSectionEntry of newsSections) {
		const fetchedNews = await getNews(newsSectionEntry.newsCount);
		homePageData.data.attributes.body[newsSectionEntry.index] = fetchedNews;
	}

	return Response.json(homePageData.data.attributes);
}
