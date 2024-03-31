"use client";
import React from "react";
import Markdown from "react-markdown";
import { CTA } from "@/types/strapi";

type CardProps = {
	headline: string;
	text?: string;
	cta?: CTA;
};

export default function Card({ headline, text: description, cta }: CardProps) {
	return (
		<div className="rounded pt-7 pb-4 px-10 bg-gray-4 drop-shadow">
			<h2 className="h2-prefix">{headline}</h2>
			{description && <Markdown className="markdown">{description}</Markdown>}
			{cta && <button>Here comes the button</button>}
		</div>
	);
}
