import { CMS_PUBLIC_API_URL, CMS_INTERNAL_API_URL } from "@/config/constants";

export const signIn = async (email: string, password: string) => {
	try {
		const response = await fetch(`${CMS_INTERNAL_API_URL}/auth/local`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				identifier: email,
				password: password,
			}),
		});
		return await response.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};

export const signUp = async (username: string, email: string, password: string, mode: "internal" | "public" = "public") => {
	const strapiApiUrl = mode == "public" ? CMS_PUBLIC_API_URL : CMS_INTERNAL_API_URL;
	try {
		const response = await fetch(`${strapiApiUrl}/auth/local/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify({
				username: username,
				email: email,
				password: password,
			}),
		});

		return await response.json();
	} catch (e) {
		console.log(e);
		return null;
	}
};
