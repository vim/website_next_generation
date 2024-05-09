import "next-auth";

declare module "next-auth" {
	interface User {
		id: string;
		email: string;
		name: string;
		jwt: JWT;
	}

	interface Session extends DefaultSession {
		id: string;
		jwt: string;
	}
}
