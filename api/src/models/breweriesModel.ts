import { pool } from "../config/db";
import { BreweryResponseBody } from "../interfaces/breweryInterfaces";

export const breweriesModel = {
  // Logic to get all breweries
  get: async (): Promise<BreweryResponseBody[]> => {
    const query = "SELECT * FROM breweries";
    const { rows } = await pool.query(query);
    return rows;
  },
  // Logic to get a beer by ID
  getById: async (id: number): Promise<BreweryResponseBody> => {
    const query = "SELECT * FROM breweries WHERE id_brewery = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
  // Logic to create a new beer
  post: async (name: string, country: string): Promise<BreweryResponseBody> => {
    const query =
      "INSERT INTO breweries (name, country) VALUES ($1, $2) RETURNING *";
    const { rows } = await pool.query(query, [name, country]);
    return rows[0];
  },
  // Logic to update a beer by ID
  put: async (
    id: number,
    name: string,
    country: string
  ): Promise<BreweryResponseBody> => {
    const query =
      "UPDATE breweries SET name = $1, country = $2 WHERE id_brewery = $3 RETURNING *";
    const { rows } = await pool.query(query, [name, country, id]);
    return rows[0];
  },
  // Logic to delete a beer by ID
  delete: async (id: number): Promise<void> => {
    const query = "DELETE FROM breweries WHERE id_brewery = $1";
    await pool.query(query, [id]);
  },
};
