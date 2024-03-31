// const cmsContentType = 'announcements';
// fetch(`${process.env.CMS_API}/${cmsContentType}`, {
//     headers: {
//         authorization: `Bearer ${process.env.CMS_TOKEN}`,
//     },
// })
//     .then((ok) => ok.json())
//     .then((res) => console.log(res));

import { getHomePageBody, getHomePageHero } from "@/helpers/homepage";
import HeroSection from "@/components/Strapi/Sections/HeroSection";
import ContentSection from "@/components/Strapi/Sections/ContentSection";

export default async function Home() {
	const bodyContent = await getHomePageBody();
	const heroContent = await getHomePageHero();

	return (
		<main>
			<HeroSection headline={heroContent.headline} listItems={heroContent.listItems} cta={heroContent.cta} />
			<ContentSection entries={bodyContent} />;
		</main>
	);
}
