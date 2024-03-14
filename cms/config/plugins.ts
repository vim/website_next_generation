// ./config/plugins.js`
"use strict";

module.exports = ({ env }) => ({
	menus: {
		config: {
			layouts: {
				menuItem: {
					link: [
						{
							input: {
								label: "Page Relation",
								name: "page_relation",
								type: "relation",
							},
							grid: {
								col: 6,
							},
						},
					],
				},
			},
		},
	},
	"config-sync": {
		enabled: true,
		config: {
			syncDir: "config/sync/",
			minify: false,
			soft: false,
			importOnBootstrap: env("NODE_ENV") !== "development",
			customTypes: [],
			excludedTypes: [],
			excludedConfig: [],
		},
	},
});
