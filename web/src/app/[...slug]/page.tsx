import React from "react";
import { getPageContent } from "@/helpers/getPageContent";
import { notFound } from "next/navigation";

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
