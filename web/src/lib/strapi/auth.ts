import { CMS_API_URL } from "@/config/constants";

export const signIn = async (email: string, password: string) => {
	try {
		const response = await fetch(`${CMS_API_URL}/auth/local`, {
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
	} catch {
		return null;
	}
};
