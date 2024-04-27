import { HomePageContent } from "@/types/strapi";

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

	const content = (await res.json()) as HomePageContent;
	return Response.json(content.data.attributes);
}
