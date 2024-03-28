"use client";
import React from "react";
import { SingleElementSection } from "@/types/section";

type CardProps = {
	content: SingleElementSection;
};

export default function Card({ content }: CardProps) {
	return (
		<div className="border-primary border-2 p-5 rounded-2xl">
			<h2 className="h2-prefix">{content.headline}</h2>
			{content.description && <p className="paragraph">{content.description}</p>}
		</div>
	);
}
