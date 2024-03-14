module.exports = [
	"strapi::errors",
	"strapi::security",
	{
		name: "strapi::cors",
		config: {
			origin: ["http://localhost:3000", "http://web:3000", "http://localhost:1337", "http://cms:1337"],
			methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS"],
			headers: ["Content-Type", "Authorization", "Origin", "Accept"],
			keepHeaderOnError: true,
		},
	},
	"strapi::poweredBy",
	"strapi::logger",
	"strapi::query",
	"strapi::body",
	"strapi::session",
	"strapi::favicon",
	"strapi::public",
];
