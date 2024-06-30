export interface Strapi {
	entityService: {
		count: (query: string) => Promise<number>;
		// Ignore linting of line to enable any on this generic type
		// eslint-disable-next-line
		create: (query: string, data: { data: any }) => Promise<void>;
	};
}

export interface User {
	id: number;
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

export interface Script {
	id: number;
	script_name: string;
	script_type: string;
	summary: string;
	description: string;
	install_details: string;
	ratings: number;
	rating_score: number;
	last_updated_by: number;
	last_update_date: string;
	created_by_user: number;
	creation_date: string;
	user: number;
}

export interface ScriptSource {
	script: number;
	mime_type: string;
	vim_version: string;
	script_version: string;
	version_comment: string;
	creation_date: string;
	package: string;
	user: number;
}

export interface ScriptRating {
	creation_date: string;
	rating: number;
	script: number;
}
