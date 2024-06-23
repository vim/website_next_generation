import qs from "qs";

export async function getPageContent(slug: string[]) {
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
	let response, data, page, pageRelation, pageContent;

	try {
		response = await fetch(`${process.env.CMS_API}/menus/1${query}`, {
			// headers: {
			//     authorization: `Bearer ${process.env.CMS_TOKEN}`,
			// },
		});

		if (!response.ok) {
			throw new Error(`Failed to fetch menu data: ${response.statusText}`);
		}

		data = await response.json();
	} catch (error) {
		return { error: "Failed to fetch menu data" };
	}

	try {
		page = data.data.attributes.items.data.find((item: { attributes: { url: string } }) => item.attributes.url.endsWith(slug[0]));
		pageRelation = page?.attributes?.page_relation?.data;

		if (!pageRelation) {
			throw new Error("Page relation not found");
		}

		const pageRes = await fetch(`${process.env.CMS_API}/pages/${pageRelation.id}?populate=*`);

		if (!pageRes.ok) {
			throw new Error(`Failed to fetch page data: ${pageRes.statusText}`);
		}

		pageContent = await pageRes.json();
	} catch (error) {
		return { error: "Failed to fetch page data" };
	}

	return { page: pageContent.data };
}
