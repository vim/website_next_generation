import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";
import { Session, User } from "next-auth";
import { signIn, signUp } from "@/lib/auth/strapi";
import { findUserByEmail, verifyPassword } from "@/lib/auth/legacy_web";
import { StrapiSignInResponse } from "@/lib/types";

const authOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Username or Email",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials) {
				try {
					if (credentials?.email == null || credentials.password == null) return null;

					const strapiResponse: StrapiSignInResponse = await signIn(credentials.email, credentials.password);

					if (strapiResponse === null || strapiResponse.error) {
						// if strapi cannot authenticate
						// look if user is to migrate
						const potentialUserForMigration = await findUserByEmail(credentials.email);
						const isToMigrate = potentialUserForMigration && verifyPassword(credentials.password, potentialUserForMigration.password);

						if (isToMigrate) {
							const migrationResponse = await signUp(potentialUserForMigration.user_name, potentialUserForMigration.email, credentials.password, "internal");

							return {
								jwt: migrationResponse.jwt,
								id: String(migrationResponse.user.id),
								email: migrationResponse.user.email,
								name: migrationResponse.user.username,
							};
						}
						return null;
					}

					return {
						jwt: strapiResponse.jwt,
						id: String(strapiResponse.user.id),
						email: strapiResponse.user.email,
						name: strapiResponse.user.username,
					};
				} catch {
					return null;
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }: { session: Session; token: JWT }) => {
			session.id = token.id as string;
			session.jwt = token.jwt as string;

			return session;
		},
		jwt: async ({ token, user }: { token: JWT; user: User }) => {
			if (user) {
				token.id = user.id;
				token.jwt = user.jwt;
				token.email = user.email;
			}
			return token;
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
