export default ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 1337),
	url: env.bool("NODE_ENV", "local") === "local" ? "" : "/cms",
	app: {
		keys: env.array("APP_KEYS"),
	},
	webhooks: {
		populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
	},
});
