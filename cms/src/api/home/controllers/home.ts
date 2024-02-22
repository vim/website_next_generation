/**
 * home controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::home.home",
  ({ strapi }) => ({
    async find(ctx) {
      const response = await super.find(ctx);
      const news = await strapi.entityService.findMany(
        "api::newspost.newspost"
      );

      return { ...response, news };
    },
  })
);
