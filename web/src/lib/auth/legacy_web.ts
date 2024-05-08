import md5 from "md5";
import { dbConnection } from "@/config/db";
// MD5 Hash is stated to be not secure
// This code has to be deleted after majority of users
// migrated to a secure hashing algorithm
// this is fulfilled when users are registered in strapi

type LegacyUser = {
	user_id: number;
	user_name: string;
	password: string;
	first_name: string;
	last_name: string;
	email: string;
	access?: boolean;
	homepage?: string;
	sponsor_amount?: number;
	sponsor_vote_amount?: number;
	sponsor_vote_date?: string;
	created: string;
};

export const findUserByEmail = (email: string): Promise<LegacyUser | null> => {
	const sql = "SELECT * FROM `vs_users` WHERE email = ?";

	return new Promise((resolve, reject) => {
		dbConnection.query(sql, [email], function (err, results) {
			if (err) {
				reject(err);
				return;
			}

			if ((results as LegacyUser[]).length >= 1) {
				resolve((results as LegacyUser[])[0]);
			} else {
				resolve(null);
			}
		});
	});
};

export const verifyPassword = (givenPassword: string, legacyHashedPassword: string) => md5(givenPassword) === legacyHashedPassword;
