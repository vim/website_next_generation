export default ({ env }) => ({
	auth: {
		secret: env("ADMIN_JWT_SECRET"),
	},
	apiToken: {
		salt: env("API_TOKEN_SALT"),
	},
	transfer: {
		token: {
			salt: env("TRANSFER_TOKEN_SALT"),
		},
	},
	flags: {
		nps: env.bool("FLAG_NPS", false),
		promoteEE: env.bool("FLAG_EE", false),
	},
	watchIgnoreFiles: ["**/config/sync/**"],
});
