import { Strapi } from "./interfaces";

export async function seedScirptsSource(strapi: Strapi) {
	try {
		const countOfScriptSource = await strapi.entityService.count("api::script-source.script-source");
		const countOfScript = await strapi.entityService.count("api::script.script");
		const amountOfSourcePerScript = 3;
		if (countOfScriptSource === 0) {
			for (let i_script = 0; i_script < countOfScript; i_script++) {
				for (let i_script_source = 0; i_script_source < amountOfSourcePerScript; i_script_source++) {
					const scriptSource = {
						script: i_script + 1,
						mime_type: "text/x-python",
						vim_version: "8.2",
						script_version: "1.0",
						version_comment: "Initial version",
						created_by_user: 789,
						creation_date: "2024-04-20T10:00:00Z",
						package: "sample-package",
					};
					await strapi.entityService.create("api::script-source.script-source", { data: scriptSource });
				}
			}
		} else {
			console.log("INFO: Script source have already been created on bootstrap");
		}
	} catch (error) {
		console.log("ERROR: Could not create script source on bootstrap");
		console.log(error);
	}
}
