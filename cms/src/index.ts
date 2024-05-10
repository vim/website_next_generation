import { createUserSeed } from "./seed";

export default {
	/**
	 * An asynchronous register function that runs before
	 * your application is initialized.
	 *
	 * This gives you an opportunity to extend code.
	 */
	register(/*{ strapi }*/) {},

	/**
	 * An asynchronous bootstrap function that runs before
	 * your application gets started.
	 *
	 * This gives you an opportunity to set up your data model,
	 * run jobs, or perform some special logic.
	 */
	async bootstrap ({ strapi }) {
		try {
			const count = await strapi.entityService.count("plugin::users-permissions.user");
			if (count === 0){
				createUserSeed(strapi, 10);
				console.log("SUCCESS: Created user on bootstrap");
			}
			else {
				console.log("INFO: User have already been created on bootstrap");
			}
		}
		catch (err) {
			console.log("ERROR: Could not create user on bootstrap");
			console.log(err.details);
		}
	}
};
