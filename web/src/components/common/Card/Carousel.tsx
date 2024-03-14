"use client";
import React, { useEffect, useRef } from "react";
import { register } from "swiper/element";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function Carousel(props: { [x: string]: any; children: any }) {
	const swiperRef = useRef(null);
	const { children, ...rest } = props;

	useEffect(() => {
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
	}, []);

	return (
		<swiper-container init="false" ref={swiperRef}>
			{children}
		</swiper-container>
	);
}
export function CarouselSlide(props) {
	const { children, ...rest } = props;

	return <swiper-slide {...rest}>{children}</swiper-slide>;
}
