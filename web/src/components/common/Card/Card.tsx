"use client";
import React from "react";

type CardProps = {
	data: unknown;
};

export default function Card({}: CardProps) {
	return <div className="border-primary border-2 p-5 rounded-2xl">Card Content</div>;
}
