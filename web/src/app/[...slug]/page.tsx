import React from "react";

export default async function page({ params }: { params: { slug: string[] } }) {
	console.log(params);
	return (
		<div>
			<h1 className="h1-prefix">Placeholder</h1>
		</div>
	);
}
