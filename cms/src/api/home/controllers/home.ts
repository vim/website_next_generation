/**
 * home controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::home.home", () => ({
	async find(ctx) {
		const response = await super.find(ctx);

		return { ...response };
	},
}));
