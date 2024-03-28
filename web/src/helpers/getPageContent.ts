import { notFound } from "next/navigation";
import qs from "qs";
import { PageContent } from "@/types/page";

export async function getPageContent(slug: string[]): Promise<PageContent> {
	const params = {
		nested: true,
		populate: {
			items: {
				populate: {
					page_relation: true,
				},
			},
		},
	};
	const query = qs.stringify(params, { addQueryPrefix: true });
	const response = await fetch(`${process.env.CMS_API}/menus/1${query}`, {
		// headers: {
		//     authorization: `Bearer ${process.env.CMS_TOKEN}`,
		// },
	});

	const data = (await response.json()).data;
	const page = data.attributes.items.data.find((item: { attributes: { url: string } }) => item.attributes.url.endsWith(slug[0]));
	const pageRelation = page?.attributes?.page_relation.data;

	if (!pageRelation) notFound();

	const pageRes = await fetch(`${process.env.CMS_API}/pages/${pageRelation.id}?populate=*`);
	const pageContent = (await pageRes.json()).data;
	return pageContent;
}
