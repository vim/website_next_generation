import GithubProvider from "next-auth/providers/github";
import NextAuth from "next-auth/next";

const authOptions = {
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID ?? "",
			clientSecret: process.env.GITHUB_SECRET ?? "",
		}),
	],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
