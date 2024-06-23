import { getNews } from "@/helpers/homepage";
import { SingleType } from "@/types/strapi";
import { notFound, redirect } from "next/navigation";

export async function GET() {
	const res = await fetch(`${process.env.CMS_API}/home?populate=deep`, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	if (!res.ok) {
		handleHTTPError(res.status);
		throw new Error("Fetching single type component home failed");
	}

	let homePageData: SingleType;

	try {
		homePageData = (await res.json()) as SingleType;
	} catch (e) {
		console.log(e);
		throw new Error("Failed to parse homepage data");
	}

	if (!homePageData?.data.attributes.body) {
		return Response.json("Homepage contains no data");
	}

	const newsSections = homePageData.data.attributes.body.flatMap((contentEntry, i) => {
		if ("newsCount" in contentEntry) {
			return { index: i, newsCount: contentEntry.newsCount, headline: contentEntry.headline };
		}
		return [];
	});

	for (const newsSectionEntry of newsSections) {
		const fetchedNews = await getNews(newsSectionEntry.newsCount);
		fetchedNews.headline = newsSectionEntry.headline;
		homePageData.data.attributes.body[newsSectionEntry.index] = fetchedNews;
	}

	return Response.json(homePageData.data.attributes);
}

function handleHTTPError(errorCode: number) {
	switch (errorCode) {
		case 400:
			return notFound();
		case 500:
			return redirect("/error/500");
		default:
			throw new Error("Fetching homepage data failed with status: " + errorCode);
	}
}
