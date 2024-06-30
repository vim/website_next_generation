import { seedScirptsSource } from "./config/seed/scipt-source";
import { seedScripts } from "./config/seed/scripts";
import { seedUsers } from "./config/seed/users";
import { seedScriptRatings } from "./config/seed/script-ratings";

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
	async bootstrap({ strapi }) {
		if (process.env.NODE_ENV === "development") {
			await seedUsers(strapi);
			await seedScripts(strapi);
			await seedScirptsSource(strapi);
			await seedScriptRatings(strapi);
		}
	},
};
