import React from "react";
import { notFound } from "next/navigation";
import { getPageContent } from "@/helpers/getPageContent";

export default async function page({ params }: { params: { slug: string[] } }) {
	try {
		const { page } = await getPageContent(params.slug);
		return (
			<div>
				<h1>{page.pageTitle}</h1>
			</div>
		);
	} catch (e) {
		notFound();
	}
}
