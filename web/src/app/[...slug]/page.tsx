import React from "react";

export default async function page({ params }: { params: { slug: string[] } }) {
	return (
		<div>
			<h1 className="h1-prefix">Placeholder</h1>
			<p>{params.slug[0]}</p>
		</div>
	);
}
