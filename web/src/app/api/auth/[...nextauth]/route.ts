import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { signIn } from "@/lib/strapi/auth";

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
					const strapiResponse = await signIn(credentials.email, credentials.password);
					console.log("juhu", strapiResponse);
					if (strapiResponse.error) {
						console.error(strapiResponse.error.details);

						return null;
					}
					return strapiResponse;
				} catch {
					return null;
				}
			},
		}),
	],
	callbacks: {
		session: async ({ session, token }: { session: any; token: any }) => {
			session.id = token.id;
			session.jwt = token.jwt;
			return Promise.resolve(session);
		},
		jwt: async ({ token, user }) => {
			const isSignIn = user ? true : false;
			if (isSignIn) {
				token.id = user.id;
				token.jwt = user.jwt;
			}
			return Promise.resolve(token);
		},
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
