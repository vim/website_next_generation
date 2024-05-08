export type StrapiSignInResponse = {
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

export type SignUpPayload = {
	username: string;
	email: string;
	password: string;
};
