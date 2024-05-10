export async function createUserSeed(strapi: { entityService: { create: (arg0: string, arg1: { data: { username: string; email: string; provider: string; password: string; resetPasswordToken: any; confirmationToken: any; confirmed: boolean; blocked: boolean; role: number; old_pw_hash: any; migrated_pw: boolean; }; }) => any; }; }, amountOfUsers: number){
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