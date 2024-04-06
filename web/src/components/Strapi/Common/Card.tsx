"use client";
import Markdown from "react-markdown";
import { Button } from "@/types/strapi";

type CardContentProps = {
	headline: string;
	text: string;
	button?: Button;
	hasShadow?: boolean;
};

export default function Card({ headline, text, button, hasShadow = false }: CardContentProps) {
	return (
		<div className={`${hasShadow && "rounded pt-7 pb-4 px-10 bg-gray-4 drop-shadow"}`}>
			<h2 className="h2-prefix">{headline}</h2>
			{text && <Markdown className="markdown">{text}</Markdown>}
			{button && <button>Here comes the button</button>}
		</div>
	);
}
