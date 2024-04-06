"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { NewsCollection } from "@/types/strapi";

import "swiper/css";
import "swiper/css/navigation";

type NewsSectionProps = {
	news: NewsCollection;
};

export default function NewsSection({ news }: NewsSectionProps) {
	const [currentIndex, setCurrentIndex] = useState(1);

	const getFormattedDate = (dateString: string): string => {
		const date = new Date(dateString);
		const isoDateString = date.toISOString().split("T")[0];
		return isoDateString;
	};

	return (
		<div className="grid rounded py-6 bg-gray-4 drop-shadow">
			<h3 className="h3-prefix pl-16">News</h3>
			<Swiper modules={[Navigation, A11y]} slidesPerView={1} navigation onActiveIndexChange={swiper => setCurrentIndex(swiper.realIndex + 1)}>
				{news.data.map(newsEntry => {
					return (
						<SwiperSlide key={newsEntry.id}>
							<div className="px-16">
								<h4 className="h4">{`[${getFormattedDate(newsEntry.attributes.createdAt)}] ${newsEntry.attributes.title}`}</h4>
								<p className="paragraph">{newsEntry.attributes.text}</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<span className="block text-base text-white text-right pr-10">{`${currentIndex} / ${news.data.length}`}</span>
		</div>
	);
}
