import { getHomePageBody, getHomePageHero } from "@/helpers/homepage";
import Hero from "@/components/Strapi/Sections/HeroSection";
import PageContent from "@/components/Strapi/Sections/Content";

export default async function Home() {
	const heroContent = await getHomePageHero();
	const bodyContent = await getHomePageBody();

	return (
		<main>
			<Hero headline={heroContent.headline} list={heroContent.list} cta={heroContent.cta} />
			<PageContent entries={bodyContent} />
		</main>
	);
}
