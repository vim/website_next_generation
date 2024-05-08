import * as mysql from "mysql2";
import { DATABASE_HOST, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_USER } from "./constants";

export const dbConnection = mysql.createConnection({
	host: DATABASE_HOST,
	user: DATABASE_USER,
	database: DATABASE_NAME,
	password: DATABASE_PASSWORD,
});
