import React from "react";
import { getPageContent } from "@/helpers/getPageContent";
import Card from "@/components/common/Card/Card";

export default async function page({ params }: { params: { slug: string[] } }) {
	const { page } = await getPageContent(params.slug);
	return (
		<div>
			{/* <h1>{page.pageTitle}</h1> */}
			<Card data={page}></Card>
		</div>
	);
}
