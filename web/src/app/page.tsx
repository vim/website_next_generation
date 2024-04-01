// const cmsContentType = 'announcements';
// fetch(`${process.env.CMS_API}/${cmsContentType}`, {
//     headers: {
//         authorization: `Bearer ${process.env.CMS_TOKEN}`,
//     },
// })
//     .then((ok) => ok.json())
//     .then((res) => console.log(res));

import { renderMatchingComponent } from "@/helpers/renderMatchingComponent";
import { getHomePageBody, getHomePageHero } from "@/helpers/homepage";
import HeroSection from "@/components/Strapi/Sections/HeroSection";

export default async function Home() {
	const heroContent = await getHomePageHero();
	const bodyContent = await getHomePageBody();

	return (
		<main>
			<HeroSection headline={heroContent.headline} listItems={heroContent.listItems} cta={heroContent.cta} />
			{bodyContent.map(contentEntry => {
				return renderMatchingComponent(contentEntry);
			})}
		</main>
	);
}
