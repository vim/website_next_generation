import { Strapi } from "./interfaces";

export async function seedScirptsSource(strapi: Strapi) {
	try {
		const count = await strapi.entityService.count("api::script-source.script-source");
		if (count === 0) {
			const scriptSource = {
				script_source_id: 1,
				script: 1,
				mime_type: "text/x-python",
				vim_version: "8.2",
				script_version: "1.0",
				version_comment: "Initial version",
				created_by_user: 789,
				creation_date: "2024-04-20T10:00:00Z",
				package: "sample-package",
			};
			await strapi.entityService.create("api::script-source.script-source", { data: scriptSource });
		} else {
			console.log("INFO: Scdetailsript source have already been created on bootstrap");
		}
	} catch (error) {
		console.log("ERROR: Could not create scripts source on bootstrap");
		console.log(error);
	}
}
