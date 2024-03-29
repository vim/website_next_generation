"use client";
import React from "react";
import Markdown from "react-markdown";
import { SingleElementSection } from "@/types/section";

type CardProps = {
	content: SingleElementSection;
};

export default function Card({ content }: CardProps) {
	return (
		<div className="rounded pt-7 pb-4 px-10 bg-gray-4 drop-shadow">
			<h2 className="h2-prefix">{content.headline}</h2>
			{content.description && <Markdown className="markdown" children={content.description} />}
		</div>
	);
}
