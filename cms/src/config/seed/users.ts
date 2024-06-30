import { Strapi, User } from "./interfaces";

export async function seedUsers(strapi: Strapi) {
	const amountOfUsers = 10;
	try {
		const count = await strapi.entityService.count("plugin::users-permissions.user");
		if (count === 0) {
			for (let i = 0; i < amountOfUsers; i++) {
				const user: User = {
					id: i + 1,
					username: `dummyUser${i}`,
					email: `dummyUser${i}@example.com`,
					provider: "local",
					password: "dummyPassword",
					resetPasswordToken: null,
					confirmationToken: null,
					confirmed: true,
					blocked: false,
					role: 1,
					old_pw_hash: null,
					migrated_pw: false,
				};
				await strapi.entityService.create("plugin::users-permissions.user", { data: user });
			}
			console.log("SUCCESS: Created users on bootstrap");
		} else {
			console.log("INFO: User have already been created on bootstrap");
		}
	} catch (err) {
		console.log("ERROR: Could not create users on bootstrap");
		console.log(err);
	}
}
