import qs from "qs";
import { GenericContentEntry, HeroSection, SingleType } from "@/types/strapi";

export async function getHomePageBody(): Promise<GenericContentEntry[]> {
	const response = await fetch(`${process.env.CMS_API}/home?populate=body`);

	if (!response.ok) {
		throw new Error("Fetching single type component home failed");
	}

	const homePageData = (await response.json()) as SingleType;
	//console.log("HomePageData", JSON.stringify(homePageData));

	return homePageData.data.attributes.body;
}

export async function getHomePageHero(): Promise<HeroSection> {
	const query = qs.stringify(
		{
			populate: ["Hero", "Hero.headline", "Hero.listItems", "Hero.cta"],
		},
		{
			encodeValuesOnly: true,
		}
	);

	const response = await fetch(`${process.env.CMS_API}/home?${query}`);

	if (!response.ok) {
		throw new Error("Fetching single type component home failed");
	}

	const homePageHero = (await response.json()) as SingleType;
	console.log(homePageHero.data.attributes.Hero);
	return homePageHero.data.attributes.Hero;
}
