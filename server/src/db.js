// db.js
import dotenv from 'dotenv';
dotenv.config();

import postgres from 'postgres';
const connectionString = process.env.DATABASE_URL;
// console.log('DATABASE_URL:', process.env);
if (!connectionString) {
	console.error('DATABASE_URL no está definida');
	process.exit(1);
}


const sql = postgres(connectionString);

export default sql;
