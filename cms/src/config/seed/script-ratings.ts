import { Strapi } from "./interfaces";

export async function seedScriptRatings(strapi: Strapi) {
	try {
		const countOfScriptRatings = await strapi.entityService.count("api::script-rating.script-rating");
		if (countOfScriptRatings === 0) {
			const amountOfRatings = 5;
			for (let i = 0; i < amountOfRatings; i++) {
				const scriptRating = {
					creation_date: "2024-04-20T10:00:00Z",
					rating: 5,
					script: 1,
				};
				strapi.entityService.create("api::script-rating.script-rating", { data: scriptRating });
			}
			console.log("SUCCESS: Created script ratings on bootstrap");
		} else {
			console.log("INFO: Script ratings have already been created on bootstrap");
		}
	} catch (error) {
		console.log("ERROR: Could not create script ratings on bootstrap");
		console.log(error);
	}
}
