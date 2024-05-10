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
	 async bootstrap ({ strapi }){
		// First, find the role by its name
		const user = {
			"username": "dummyUser",
			"email": "dummyUser@example.com",
			"provider": "local",
			"password": "dummyPassword",
			"resetPasswordToken": null,
			"confirmationToken": null,
			"confirmed": true,
			"blocked": false,
			"role": 1,
			"old_pw_hash": null,
			"migrated_pw": false
		  }
		  try{
			const count = await strapi.entityService.count("plugin::users-permissions.user")
			if(count ===0){
				await strapi.entityService.create("plugin::users-permissions.user", {data: user})
				console.log("SUCCESS: Created user on bootstrap")
			}
			else{
				console.log("INFO: User have already been created on bootstrap")
			}
		  }
		  catch(err){
			console.log("ERROR: Could not create user on bootstrap")
			console.log(err.details)
		  }
     }
};
