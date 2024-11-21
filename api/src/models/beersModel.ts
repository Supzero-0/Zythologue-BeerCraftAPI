import { log } from "console";
import { pool } from "../config/db";
import { BeerResponseBody } from "../interfaces/beerInterfaces";

export const beersModel = {
  // Logic to get all beers
  get: async (): Promise<BeerResponseBody[]> => {
    const query = "SELECT * FROM beers";
    const { rows } = await pool.query(query);
    return rows;
  },
  // Logic to get a beer by ID
  getById: async (id: number): Promise<BeerResponseBody> => {
    const query = "SELECT * FROM beers WHERE id_beer = $1";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
  },
  // Logic to create a new beer
  post: async (
    name: string,
    description: string,
    abv: number,
    price: number,
    id_brewery: number
  ): Promise<BeerResponseBody> => {
    const query =
      "INSERT INTO beers (name, description, abv, price, id_brewery) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const { rows } = await pool.query(query, [
      name,
      description,
      abv,
      price,
      id_brewery,
    ]);
    return rows[0];
  },
  // Logic to update a beer by ID
  put: async (
    id: number,
    name: string,
    description: string,
    abv: number,
    price: number,
    id_brewery: number
  ): Promise<BeerResponseBody> => {
    const query =
      "UPDATE beers SET name = $1, description = $2, abv = $3, price = $4, id_brewery = $5 WHERE id_beer = $6 RETURNING *";
    const { rows } = await pool.query(query, [
      name,
      description,
      abv,
      price,
      id_brewery,
      id,
    ]);
    return rows[0];
  },
  // Logic to delete a beer by ID
  delete: async (id: number): Promise<void> => {
    const query = "DELETE FROM beers WHERE id_beer = $1";
    await pool.query(query, [id]);
  },
};
