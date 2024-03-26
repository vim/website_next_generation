import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { signIn } from "@/lib/strapi/auth";

type StrapiResponse = {
	jwt: string;
	user: {
		id: number;
		username: string;
		email: string;
		provider: string;
		confirmed: boolean;
		blocked: boolean;
		createdAt: string;
		updatedAt: string;
	};
	error?: {
		details: string[];
	};
};

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

					const strapiResponse: StrapiResponse = await signIn(credentials.email, credentials.password);

					if (strapiResponse.error) {
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
		session: async ({ session, token }: { session: any; token: any }) => {
			session.id = token.id;
			session.jwt = token.jwt;
			return session;
		},
		jwt: async ({ token, user }: { token: any; user: any }) => {
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
