import { Script, Strapi } from "./interfaces";

export async function seedScripts(strapi: Strapi) {
	try {
		const count = await strapi.entityService.count("api::script.script");
		const amountOfScripts = 5;
		if (count === 0) {
			for (let i = 0; i < amountOfScripts; i++) {
				const script: Script = {
					id: i + 1,
					script_name: "SampleScript",
					script_type: "Automation",
					summary: "A sample script for automating routine tasks.",
					description: "This script automates various routine tasks such as file backup and system maintenance.",
					install_details: "Download the script file and execute it on your system.",
					ratings: 4,
					rating_score: 80,
					last_updated_by: 123,
					last_update_date: "2024-05-12T15:30:00Z",
					created_by_user: 1,
					creation_date: "2024-04-20T10:00:00Z",
					user: 1,
				};
				await strapi.entityService.create("api::script.script", { data: script });
			}
			console.log("SUCCESS: Created scripts on bootstrap");
		} else {
			console.log("INFO: Scripts have already been created on bootstrap");
		}
	} catch (error) {
		console.log("ERROR: Could not create scripts on bootstrap");
		console.log(error.details);
	}
}
