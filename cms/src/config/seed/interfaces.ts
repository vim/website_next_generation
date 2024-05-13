export interface Strapi {
	entityService: {
		count: (query: string) => Promise<number>;
		// Ignore linting of line to enable any on this generic type
		// eslint-disable-next-line
		create: (query: string, data: { data: any }) => Promise<void>;
	};
}

export interface User {
	username: string;
	email: string;
	provider: string;
	password: string;
	resetPasswordToken: null;
	confirmationToken: null;
	confirmed: boolean;
	blocked: boolean;
	role: number;
	old_pw_hash: null;
	migrated_pw: boolean;
}
