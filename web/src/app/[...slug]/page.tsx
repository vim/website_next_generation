import React from "react";
import { getPageContent } from "@/helpers/getPageContent";
import { ContentEntry } from "@/components/common/ContentEntry/ContentEntry";

export default async function page({ params }: { params: { slug: string[] } }) {
	const pageContent = await getPageContent(params.slug);
	return (
		<div>
			<h1 className="h1-prefix">{pageContent.attributes.pageTitle}</h1>
			{pageContent.attributes.contentSection.map(contentEntry => {
				return <ContentEntry key={contentEntry.id} entry={contentEntry} />;
			})}
		</div>
	);
}
