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
    const respose = await fetch(`${process.env.CMS_API}/menus/1${query}`, {
        // headers: {
        //     authorization: `Bearer ${process.env.CMS_TOKEN}`,
        // },
    });
    const data = (await respose.json()).data;
    const page = data.attributes.items.data.find((item: { attributes: { url: string; }; }) => item.attributes.url.endsWith(slug[0]));
    const pageRelation = page?.attributes?.page_relation.data;
    
    let pageContent;
    if (pageRelation) {
        const pageRes = await fetch(`${process.env.CMS_API}/pages/${pageRelation.id}?populate=*`);
        pageContent = (await pageRes.json()).data;
    }
    return {page: pageContent};
}