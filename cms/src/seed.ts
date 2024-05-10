export async function createUserSeed(strapi, amountOfUsers: number){
    console.log("Function called")

    for (let i = 0; i < amountOfUsers; i++) {
        const user = {
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
        await strapi.entityService.create("plugin::users-permissions.user", {data: user});
    } 

}