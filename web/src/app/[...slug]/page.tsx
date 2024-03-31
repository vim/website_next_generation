import React from "react";
import { getPageContent } from "@/helpers/getPageContent";

export default async function page({ params }: { params: { slug: string[] } }) {
	const pageContent = await getPageContent(params.slug);
	return (
		<div>
			<h1 className="h1-prefix">{pageContent.attributes.pageTitle}</h1>
		</div>
	);
}
