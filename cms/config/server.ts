export default ({ env }) => ({
	host: env("HOST", "0.0.0.0"),
	port: env.int("PORT", 1337),
	url: env("NODE_ENV") === "local" ? "" : "https://preview.vim.org/cms",
	app: {
		keys: env.array("APP_KEYS"),
	},
	webhooks: {
		populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
	},
});
