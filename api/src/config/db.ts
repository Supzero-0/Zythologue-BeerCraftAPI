import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config({ path: process.env.NODE_ENV === "test" ? ".env.test" : ".env" });

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432", 10),
});

export const testDBConnection = async () => {
  try {
    const client = await pool.connect();
    console.log("Connected to the database");
    client.release();
    return true;
  } catch (err) {
    console.error("Error connecting to the database", err);
    return false;
  }
};
