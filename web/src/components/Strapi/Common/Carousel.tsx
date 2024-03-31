// @ts-nocheck
"use client";
import React, { PropsWithChildren, useEffect, useRef } from "react";
import { register, SwiperContainer } from "swiper/element";

export default function Carousel(props: PropsWithChildren<Record<string, unknown>>) {
	const swiperRef = useRef<SwiperContainer>(null);
	const { children, ...rest } = props;

	useEffect(() => {
		if (!swiperRef.current) return;
		// Register Swiper web component
		register();

		// pass component props to parameters
		const params = {
			...rest,
		};

		// Assign it to swiper element
		Object.assign(swiperRef.current, params);

		// initialize swiper
		swiperRef.current.initialize();
	}, [rest, swiperRef]);

	return (
		<swiper-container init="false" ref={swiperRef}>
			{children}
		</swiper-container>
	);
}
export function CarouselSlide(props) {
	const { children, ...rest } = props;

	// @ts-ignore
	return <swiper-slide {...rest}>{children}</swiper-slide>;
}
