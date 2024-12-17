
import { beersModel } from "../models/beersModel";
import { pool } from "../config/db";

jest.mock("../config/db");

describe("beersModel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all beers", async () => {
    const mockBeers = [{ id_beer: 1, name: "Beer 1" }];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockBeers });

    const result = await beersModel.get();
    expect(result).toEqual(mockBeers);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM beers");
  });

  it("should get a beer by ID", async () => {
    const mockBeer = { id_beer: 1, name: "Beer 1" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBeer] });

    const result = await beersModel.getById(1);
    expect(result).toEqual(mockBeer);
    expect(pool.query).toHaveBeenCalledWith("SELECT * FROM beers WHERE id_beer = $1", [1]);
  });

  it("should create a new beer", async () => {
    const mockBeer = { id_beer: 1, name: "Beer 1" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBeer] });

    const result = await beersModel.post("Beer 1", "Description", 5.0, 10.0, 1);
    expect(result).toEqual(mockBeer);
    expect(pool.query).toHaveBeenCalledWith(
      "INSERT INTO beers (name, description, abv, price, id_brewery) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      ["Beer 1", "Description", 5.0, 10.0, 1]
    );
  });

  it("should update a beer by ID", async () => {
    const mockBeer = { id_beer: 1, name: "Updated Beer" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockBeer] });

    const result = await beersModel.put(1, "Updated Beer", "Updated Description", 6.0, 12.0, 1);
    expect(result).toEqual(mockBeer);
    expect(pool.query).toHaveBeenCalledWith(
      "UPDATE beers SET name = $1, description = $2, abv = $3, price = $4, id_brewery = $5 WHERE id_beer = $6 RETURNING *",
      ["Updated Beer", "Updated Description", 6.0, 12.0, 1, 1]
    );
  });

  it("should delete a beer by ID", async () => {
    await beersModel.delete(1);
    expect(pool.query).toHaveBeenCalledWith("DELETE FROM beers WHERE id_beer = $1", [1]);
  });
});